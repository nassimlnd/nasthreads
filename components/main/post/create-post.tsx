'use client'

import React from 'react';
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import {BarChart3, CalendarClock, ImageIcon, Plus, Smile} from "lucide-react";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import axios from "axios";
import Image from "next/image";

interface Props {
    user?: any
}

export function CreatePost({user}: Props) {
    const [content, setContent] = React.useState<string>("");
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let res = await axios.post("/api/post/", {content: content});
        if (res.status === 200) {
            setContent("");
            window.location.href = "/";
        }
    }


    return (
        <>
            <div
                className={"max-[499px]:hidden flex px-4 pb-4 lg:py-4 border-b border-gray-100 dark:border-gray-900 w-full lg:w-full"}>
                <div className={"w-fit pt-2 lg:pt-0"}>
                    {user?.image && <Image src={user.image} alt={"Profile picture"} width={40} height={40} className={"mt-1.5"}/>}

                    {!user?.image &&
                        <div
                            className={"h-[40px] w-[40px] rounded-full bg-black text-white border border-gray-500 flex items-center justify-center text-sm mt-1.5"}>
                            {user?.name?.split(" ").map((name: string) => name[0].toUpperCase())}
                        </div>
                    }
                </div>
                <form className={"pt-1 w-full"}
                      onSubmit={handleSubmit}
                >
                    <Input
                        className={"bg-white dark:bg-black text-base border-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"}
                        placeholder={"Quoi de neuf ?"}
                        defaultValue={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className={"flex justify-between px-3 mt-2 items-center w-full"}>
                        <div className={"flex space-x-3 items-center"}>
                            <ImageIcon size={20} className={"text-indigo-500"}/>
                            <BarChart3 size={20} className={"text-indigo-500"}/>
                            <CalendarClock size={20} className={"text-indigo-500"}/>
                            <Smile size={20} className={"text-indigo-500"}/>
                        </div>
                        <Button variant={"default"}
                                type={"submit"}
                        >
                            Poster
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export function CreatePostModal() {
    return (
        <div className={"hidden max-[499px]:flex"}>
            <Dialog>
                <DialogTrigger>
                    <div
                        className={cn(buttonVariants({variant: "default"}), "rounded-full h-[48px] w-[48px] fixed bottom-24 right-6 flex items-center justify-center")}>
                        <Plus size={16}/>
                    </div>
                </DialogTrigger>
                <DialogContent className={"bg-white dark:bg-black h-full lg:h-fit"}>
                    <div className={"flex flex-col items-center space-y-8"}>
                        <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>Créer un nouveau
                            post</h3>
                        <div className={"flex flex-col items-center pb-8"}>
                            <div className={"flex flex-col space-y-2 mt-6"}>

                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}