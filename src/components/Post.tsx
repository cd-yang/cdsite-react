import React from 'react';
import { useParams } from 'react-router';

const postsData = [
    {
        "title": "Hello World",
        "slug": "hello-world",
        "content": "This is the Hello World post. WordPress says edit or delete this kind of posts. I say just keep it."
    },
    {
        "title": "React Lesson 1",
        "slug": "react-lesson-1",
        "content": "The first lesson of React is to learn Javascript first. So, search 'Javascript Tutorial' in Google and follow it. Then, come back here. You'll see the tutorial when you are an Javascript expert. (MAGIC)"
    }
]

interface ParamTypes {
    slug: string
}

export default function Post() {
    let { slug } = useParams<ParamTypes>();
    let post = findPostBySlug(slug);

    return (
        <div className="post-content-view">
            <h1 className="title">{post ? post.title : ''}</h1>
            <article>{post ? post.content : ''}</article>
        </div>
    );
}

function findPostBySlug(slug: string) {
    return postsData.find(o => o.slug === slug);
}