import React from 'react';
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import {BarChart3, CalendarClock, ImageIcon, Smile} from "lucide-react";

function CreatePost() {
    return (
        <div className={"flex px-4 pb-4 lg:py-4 border-b border-gray-100 dark:border-gray-900 w-full lg:w-[600px]"}>
            <div className={"w-fit pt-2 lg:pt-0"}>
                <div className={"h-[32px] w-[32px] text-sm lg:text-base lg:h-[48px] lg:w-[48px] bg-green-500 rounded-full flex items-center justify-center"}>
                    NL
                </div>
            </div>
            <div className={"pt-1 w-full"}>
                <Input className={"bg-white dark:bg-black text-base border-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"} placeholder={"Quoi de neuf ?"} />
                <div className={"flex justify-between px-3 mt-2 items-center w-full"}>
                    <div className={"flex space-x-3 items-center"}>
                        <ImageIcon size={20} className={"text-indigo-500"} />
                        <BarChart3 size={20} className={"text-indigo-500"} />
                        <CalendarClock size={20} className={"text-indigo-500"} />
                        <Smile size={20} className={"text-indigo-500"} />
                    </div>
                    <Button variant={"default"}>
                        Poster
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;