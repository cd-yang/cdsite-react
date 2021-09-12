import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import showdown from 'showdown';
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { IPost } from '../../types/IBlog'

const converter = new showdown.Converter();

type Props = {
  post: IPost
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <article className="mb-32">
        <div>
          <h1>{post.title}</h1>
          <article dangerouslySetInnerHTML={{
            __html: post?.contentMarkdown
              ? converter.makeHtml(post.contentMarkdown)
              : post?.content
          }} />
        </div>
      </article>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
