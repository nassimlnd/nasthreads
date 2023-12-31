'use client'

import Logo from "@/components/logo-with-text";
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
    const [isMobile, setIsMobile] = React.useState(false);
    const [currentTab, setCurrentTab] = React.useState(1);

    React.useEffect(() => {
        function updateSize() {
            if (window.innerWidth < 500) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        return window.addEventListener('resize', updateSize);
    }, []);

    return (
        <>
            {!isMobile ? (
                <div
                    className="flex flex-col justify-between px-1 lg:px-2.5 py-4 lg:py-6 lg:min-w-[300px] border-gray-100 dark:border-gray-900 border-r">
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
            ) : (
                <>
                    <div className={"fixed top-0 left-0 w-full h-fit border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-black"}>
                        <div className={"flex justify-between items-center px-4 py-3"}>
                            <div>
                                <Button variant={"ghost"}
                                        className={"h-fit w-full flex items-center justify-start bg-white dark:bg-black text-black dark:text-white gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-3"}>
                                    {!user.image && <div
                                        className={"h-[32px] w-[32px] rounded-full bg-black text-white border border-gray-500 flex items-center justify-center text-sm"}>
                                        {user.name.split(" ").map((name: string) => name[0].toUpperCase())}
                                    </div>}
                                    {user.image && <Image src={user.image} alt={"Profile picture"} width={48} height={40}/>}
                                    <div className={"hidden lg:flex flex-col justify-center items-start"}>
                                        <p>{user.name || "NO NAME"}</p>
                                        <p className={"text-slate-500"}>@nassimlounadi</p>
                                    </div>
                                </Button>
                            </div>
                            <ModeToggle/>
                        </div>
                    </div>
                    <div
                        className={"fixed bottom-0 left-0 h-[70px] bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 z-20 w-full flex justify-between items-center px-6 pb-2"}>
                        <Link href={"/"} className={"p-2"}>
                            <Home size={28}/>
                        </Link>
                        <Link href={"/"} className={"p-2"}>
                            <Search size={28}/>
                        </Link>
                        <Link href={"/"} className={"p-2"}>
                            <Bell size={28}/>
                        </Link>
                        <Link href={"/"} className={"p-2"}>
                            <Mail size={28}/>
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}

export default Sidebar