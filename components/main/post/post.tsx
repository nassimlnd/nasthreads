'use client'

import {Separator} from "@/components/ui/separator";
import LikeButton from "@/components/main/post/like-button";
import RepostButton from "@/components/main/post/repost-button";
import CommentButton from "@/components/main/post/comment-button";
import ShareButton from "@/components/main/post/share-button";

const Post = () => {
    return (
        <div>
            <div className={"flex px-4 py-4 space-x-4 border-b border-gray-100 dark:border-gray-900 w-full lg:w-[600px]"}>
                <div className={"w-fit"}>
                    <div className={"h-[32px] w-[32px] text-sm lg:text-base lg:h-[48px] lg:w-[48px] rounded-full bg-red-500 flex items-center justify-center"}>
                        NL
                    </div>
                </div>
                <div className={"w-full"}>
                    <div className={"flex space-x-1 text-sm items-center"}>
                        <p className={"font-bold"}>Nassim LOUNADI</p>
                        <p className={"text-slate-500"}>@nassimlounadi</p>
                        <Separator orientation={"vertical"} className={"h-0.5"} />
                        <p className={"text-slate-500"}>23s</p>
                    </div>
                    <div className={"mt-1 text-sm"}>
                        Tom is in a bug hurry to get to the airport.
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