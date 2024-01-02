'use client'

import Logo from "@/components/icons/logo";
import SidebarItem from "@/components/main/sidebar/sidebar-item";
import SidebarProfil from "@/components/main/sidebar/sidebar-profil";
import {Bell, Home, List, Mail, MessageCircle, Search, TrendingUp, User} from "lucide-react";
import {ModeToggle} from "@/components/mode-toggle";
import LogoWithText from "@/components/logo-with-text";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface Props {
    children?: React.ReactNode,
    user: any
}

const Sidebar = ({children, user}: Props) => {
    return (
        <>
            <div
                className="hidden min-[500px]:flex fixed bg-white dark:bg-black h-full flex-col justify-between px-1 lg:px-2.5 py-4 lg:py-6 lg:min-w-[300px] border-gray-100 dark:border-gray-900 border-r">
                <div>
                    <LogoWithText className={"gap-3 px-4"}/>
                    <div className="pt-2 lg:pt-6 space-y-1 flex flex-col items-center">
                        <SidebarItem value={"Accueil"} icon={<Home className={"h-5 w-5 lg:h-6 lg:w-6"}/>} link={"/"}
                                     selected={false}/>
                        <SidebarItem value={"Tendances"} icon={<TrendingUp className={"h-5 w-5 lg:h-6 lg:w-6"}/>}
                                     link={"/"} selected={false}/>
                        <SidebarItem value={"Notifications"} icon={<Bell className={"h-5 w-5 lg:h-6 lg:w-6"}/>}
                                     link={"/"} selected={false}/>
                        <SidebarItem value={"Messages"} icon={<MessageCircle className={"h-5 w-5 lg:h-6 lg:w-6"}/>}
                                     link={"/"} selected={false}/>
                        <SidebarItem value={"Listes"} icon={<List className={"h-5 w-5 lg:h-6 lg:w-6"}/>} link={"/"}
                                     selected={false}/>
                    </div>
                </div>
                <div className={"space-y-3"}>
                    <div className={"px-2.5 flex justify-center lg:justify-start"}>
                        <ModeToggle/>
                    </div>
                    <SidebarProfil user={user}/>
                </div>
            </div>

            <div
                className={"min-[500px]:hidden fixed top-0 left-0 w-full h-[96px] border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-black"}>
                <div className={"flex justify-between items-center px-2 pr-4 py-3"}>
                    <div>
                        <SidebarProfil user={user}/>
                    </div>
                    <div className={"w-fit"}>
                        <Image src={"/assets/images/logo.png"} alt={"Logo"} width={32} height={32}/>
                    </div>
                    <ModeToggle/>
                </div>
            </div>
            <div
                className={"min-[500px]:hidden fixed bottom-0 left-0 h-[70px] bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 z-20 w-full flex justify-between items-center px-6 pb-2"}>
                <Link href={"/"} className={"p-2"}>
                    <Home size={24}/>
                </Link>
                <Link href={"/"} className={"p-2"}>
                    <Search size={24}/>
                </Link>
                <Link href={"/"} className={"p-2"}>
                    <Bell size={24}/>
                </Link>
                <Link href={"/"} className={"p-2"}>
                    <Mail size={24}/>
                </Link>
            </div>
        </>
    )
}

export default Sidebar