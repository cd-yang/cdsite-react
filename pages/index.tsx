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
      {allPosts.sort((p1, p2) => p2.id - p1.id).map(post =>
        <div key={post.id} className="items-center">
          <section>
            <Link href={"/posts/" + post.slug} key={post.slug}>
              <a className="text-4xl">{post.title}</a>
            </Link>
          </section>
          <time className="ml-2">
            {new Date(post.createOnUtc).toLocaleDateString()}
          </time>
          <article className="mb-8">{post.contentAbstract}</article>
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
