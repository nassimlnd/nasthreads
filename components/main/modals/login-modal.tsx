'use client'

import React, {Component} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button, buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import Logo from "@/components/icons/logo";
import GoogleLoginButton from "@/components/auth/google-login-button";
import GithubLoginButton from "@/components/auth/github-login-button";
import Link from "next/link";


class LoginModal extends Component {
    render() {
        return (
            <div>
                <Dialog>
                    <DialogTrigger>
                        <div className={cn(buttonVariants({variant: 'secondary'}), "w-[300px]")}>
                            Se connecter
                        </div>
                    </DialogTrigger>
                    <DialogContent className={"bg-white dark:bg-black h-full lg:h-fit"}>
                        <DialogHeader>
                            <div className={"flex justify-center items-center"}>
                                <Logo className={"h-[40px] w-[40px]"} />
                            </div>
                        </DialogHeader>
                        <div className={"flex flex-col items-center space-y-8"}>
                            <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>Connectez-vous à NasThreads</h3>
                            <div className={"flex flex-col items-center pb-8"}>
                                <div className={"flex flex-col space-y-2 mt-6"}>
                                    <GoogleLoginButton className={"w-[300px]"} />
                                    <GithubLoginButton className={"w-[300px]"} />
                                </div>
                                <div className={"flex items-center space-x-2 max-w-[300px] mt-4"}>
                                    <Separator orientation={"horizontal"} className={"w-[130px]"}/>
                                    <p>ou</p>
                                    <Separator orientation={"horizontal"} className={"w-[130px]"}/>
                                </div>
                                <form className={"w-full space-y-2.5 mt-4"}>
                                    <Input type={"text"} placeholder={"Adresse e-mail"} className={"bg-white dark:bg-black"}/>
                                    <Input type={"password"} placeholder={"Mot de passe"} className={"bg-white dark:bg-black"} />
                                </form>
                                <div className={"flex flex-col items-center space-y-3 mt-8"}>
                                    <Button variant={"default"} className={"w-[300px]"}>
                                        Se connecter
                                    </Button>
                                    <Button variant={"secondary"} className={"w-[300px]"}>
                                        Mot de passe oublié ?
                                    </Button>
                                </div>
                                <p className={"text-sm mt-3"}>Vous n'avez pas de compte ? <Link href={"#"} className={"text-indigo-500"}>Inscrivez-vous</Link></p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default LoginModal;