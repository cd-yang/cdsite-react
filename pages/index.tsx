import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import { IPost } from '../types/IBlog'
import Layout from '../components/layout'

type Props = {
  allPosts: IPost[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      {allPosts.map(post =>
        <div>
          <section>
            <Link href={"/posts/" + post.slug} key={post.slug}>
              <a style={{ fontSize: "2em" }}>{post.title}</a>
            </Link>
          </section>
          <time style={{ marginLeft: "0.5em" }}>
            {new Date(post.createOnUtc).toLocaleDateString()}
          </time>
          <article style={{ marginBottom: "30px" }}>{post.contentAbstract}</article>
        </div>
      )}
    </Layout>
  )
}

export default Index

export const getServerSideProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts },
  }
}
