'use client'

import {Separator} from "@/components/ui/separator";
import LikeButton from "@/components/main/post/like-button";
import RepostButton from "@/components/main/post/repost-button";
import CommentButton from "@/components/main/post/comment-button";
import ShareButton from "@/components/main/post/share-button";
import Image from "next/image";
import React from "react";

interface PostProps {
    content: string;
    user: any;
    createdAt: string;
}

function calculateDateTimeDifference(date1: Date, date2: Date): string {
    const timeDifferenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds}s`;
    } else if (minutes < 60) {
        return `${minutes}min`;
    } else if (hours < 24) {
        return `${hours}h`;
    } else {
        return `${days}d`;
    }
}

const Post = ({content, user, createdAt} : PostProps) => {
    return (
        <div>
            <div className={"flex px-4 py-4 space-x-4 border-b border-gray-100 dark:border-gray-900 w-full lg:w-full"}>
                <div className={"w-fit"}>
                    {user?.image && <Image src={user.image} alt={"Profile picture"} width={40} height={40} className={"mt-1.5"}/>}

                    {!user?.image &&
                        <div
                            className={"h-[40px] w-[40px] rounded-full bg-black text-white border border-gray-500 flex items-center justify-center text-sm mt-1.5"}>
                            {user?.name?.split(" ").map((name: string) => name[0].toUpperCase())}
                        </div>
                    }
                </div>
                <div className={"w-full"}>
                    <div className={"flex space-x-1 text-sm items-center"}>
                        <p className={"font-bold"}>{user?.name}</p>
                        <p className={"text-slate-500"}>@usernameOfUser</p>
                        <Separator orientation={"vertical"} className={"h-0.5"} />
                        <p className={"text-slate-500"}>{
                            calculateDateTimeDifference(new Date(createdAt), new Date())
                        }</p>
                    </div>
                    <div className={"mt-1 text-sm"}>
                        {content}
                    </div>
                    <div className={"flex mt-4 justify-between pr-2"}>
                        <CommentButton value={"128"} />
                        <RepostButton value={"64"} />
                        <LikeButton value={"64"} />
                        <ShareButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;