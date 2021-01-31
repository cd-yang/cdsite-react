import React from "react";
import { Link } from "react-router-dom";

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
];

export default function Blog() {
    const posts = postsData.map(post => {
        return (
            <Link to={"/post/" + post.slug} key={post.slug}>
                <div className="post-listing">
                    <h1>{post.title}</h1>
                </div>
            </Link>
        );
    });

    return <div className="blog">{posts}</div>;
}