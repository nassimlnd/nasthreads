import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions, getServerAuthSession} from "@/lib/auth";
import Post from "@/components/main/post/post";
import {CreatePost, CreatePostModal} from "@/components/main/post/create-post";
import {getPosts} from "@/services/post";

async function getData() {
    const res = await fetch("http://localhost:3000/api/post");

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    const posts = await res.json();

    if (posts.posts.length === 0) {
        return null;
    }

    return posts.posts;
}

export default async function HomePage() {
    let session = await getServerSession(authOptions);
    if (!session) {
        redirect('/auth');
    }

    const user = await session.user;
    const posts = await getData();

    return (
        <main
            className="flex h-full lg:w-3/4 mx-auto">
            <Sidebar user={user}/>
            <div
                className={"h-fit w-full ml-16 lg:ml-[300px] lg:w-1/2 border-r border-gray-100 dark:border-gray-900 max-[499px]:pt-28 max-[500px]:pb-[96px]"}>
                <div
                    className={"flex space-x-2.5 items-center justify-center border-b border-gray-100 dark:border-gray-900"}>
                    <div
                        className={"h-full text-xs lg:text-base w-full py-4 px-5 border-b-4 border-indigo-600 cursor-pointer hover:dark:bg-slate-800 transition text-center"}>
                        Fil d'actualité
                    </div>
                    <div className={"h-full text-xs lg:text-base w-full py-4 px-5 transition cursor-not-allowed text-center"}>
                        Abonnements
                    </div>
                    <div className={"h-full text-xs lg:text-base w-full py-4 px-5 cursor-not-allowed text-center"}>
                        Fil d'actualité
                    </div>
                </div>
                <CreatePost user={user}/>
                <CreatePostModal/>
                {/*<Post user={user} createdAt={"2024-01-02T00:07:20.715Z"} content={"Content test"}/>*/}
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
            </div>
        </main>
    );
}

