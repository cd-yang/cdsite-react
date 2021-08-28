import { join } from 'path'
import Axios from 'axios';
import { IBlog, IPost, IResponse } from '../types/IBlog';

export async function getPostSlugs() {
  const blog = await Axios.get<IResponse<IBlog>>('http://localhost:5000/api/Blog?page=1')
  return blog.data.response.data.map(post => post.slug);
}

export async function getPostBySlug(slug: string) {
  const post = await Axios.get<IResponse<IPost>>('http://localhost:5000/api/Blog/' + slug)
  return post.data.response
}

export async function getAllPosts() { // fields: string[] = []
  const blog = await Axios.get<IResponse<IBlog>>('http://localhost:5000/api/Blog?page=1')
  return blog.data.response.data
}
