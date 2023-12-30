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
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import Logo from "@/components/icons/logo";
import GoogleLoginButton from "@/components/auth/google-login-button";
import GithubLoginButton from "@/components/auth/github-login-button";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";

class RegisterModal extends Component {
    render() {
        return (
            <Dialog>
                <DialogTrigger>
                    <div className={cn(buttonVariants({variant: 'default'}), "w-[300px]")}>
                        Créer un compte
                    </div>
                </DialogTrigger>
                <DialogContent className={"bg-white dark:bg-black h-full lg:h-fit"}>
                    <DialogHeader >
                        <h4 className={"scroll-m-20 text-xl font-semibold tracking-tight"}>
                            Étape 1/5
                        </h4>
                    </DialogHeader>
                    <div className={"flex flex-col items-center space-y-8 pb-8 pt-4 lg:px-16"}>
                        <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>Créer votre compte</h3>
                        <form className={"w-full"}>
                            <div className={"space-y-3"}>
                                <Input type={"text"} placeholder={"Nom et prénom"}
                                       className={"bg-white dark:bg-black"}/>
                                <Input type={"text"} placeholder={"Adresse e-mail"}
                                       className={"bg-white dark:bg-black"}/>
                            </div>

                            <div className={"mt-8"}>
                                <p className={"font-semibold"}>Date de naissance</p>
                                <p className="text-xs text-slate-500 mt-1">Cette information ne sera pas affichée
                                    publiquement. Confirmez votre âge, même si ce
                                    compte est pour une entreprise, un animal de compagnie ou autre chose.</p>

                                <Popover>
                                    <PopoverTrigger asChild className={"bg-white dark:bg-black mt-8 w-full"}>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                            )}
                                        >
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            disabled={(date: any) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                            className={cn("bg-white dark:bg-black")}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </form>
                        <Button className={"w-[300px] mt-8 mx-auto"} variant={"default"}>
                            Suivant
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

export default RegisterModal;