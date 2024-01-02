'use client'

import React, {useEffect} from 'react';
import Post from "@/components/main/post/post";

async function getPosts(url : string) {
    const res = await fetch( url + "/api/post");

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    const posts = await res.json();

    if (posts.posts.length === 0) {
        return null;
    }

    return posts.posts;
}

function PostFeed() {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts(window.location.origin);
            setPosts(posts);
        }

        fetchPosts().catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <>
            {
                posts && posts
                    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .map((post: any) => (
                        <Post
                            key={post.id}
                            user={post.user}
                            createdAt={post.createdAt}
                            content={post.content}
                        />
                    ))
            }
        </>
    );
}

export default PostFeed;