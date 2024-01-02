'use client'

import React, {Component, useState} from 'react';
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
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";

const RegisterModal = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [code, setCode] = useState("");

    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (currentStep == 2) {
            console.log("Submitted!")
            console.log("Name: " + name)
            console.log("Email: " + email)
            console.log("Birth date: " + birthDay + "/" + birthMonth + "/" + birthYear);
            console.log("Code: " + code)

            const res = await axios.post('/api/auth/register', {
                name: name,
                email: email,
                password: 1234<56,
                birthDate: birthYear + "-" + birthMonth + "-" + birthDay
            }).then((res) => res).catch((err) => err.response);

            if (res.status === 200) {
                router.push("/");
                console.log("Registered!")
            }
        } else {
            setCurrentStep(currentStep + 1);
        }
    }

    const onDialogClose = () => {
        setEmail("");
        setName("");
        setBirthDay("");
        setBirthMonth("");
        setBirthYear("");
        setCurrentStep(1);
    }

    return (
        <Dialog
            onOpenChange={onDialogClose}
        >
            <DialogTrigger>
                <div className={cn(buttonVariants({variant: 'default'}), "w-[300px]")}>
                    Créer un compte
                </div>
            </DialogTrigger>
            <DialogContent
                className={"bg-white dark:bg-black h-full lg:h-fit"}
            >
                <DialogHeader>
                    <h4 className={"scroll-m-20 text-xl font-semibold tracking-tight"}>
                        Étape {currentStep}/5
                    </h4>
                </DialogHeader>
                {currentStep === 1 && (
                    <div className={"flex flex-col items-center space-y-8 pb-8 pt-4 lg:px-16"}>
                        <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>Créer votre compte</h3>
                        <form className={"w-full"} onSubmit={handleSubmit}>
                            <div className={"space-y-3"}>
                                <Input type={"text"} placeholder={"Nom et prénom"}
                                       className={"bg-white dark:bg-black"}
                                       onChange={(event) => {
                                           setName(event.target.value);
                                       }}
                                />
                                <Input type={"email"} placeholder={"Adresse e-mail"}
                                       className={"bg-white dark:bg-black"}
                                       onChange={(event) => {
                                           setEmail(event.target.value);
                                       }}
                                />
                            </div>

                            <div className={"mt-8"}>
                                <p className={"font-semibold"}>Date de naissance</p>
                                <p className="text-xs text-slate-500 mt-1">Cette information ne sera pas affichée
                                    publiquement. Confirmez votre âge, même si ce
                                    compte est pour une entreprise, un animal de compagnie ou autre chose.</p>


                                <div className={"flex space-x-2 bg-white dark:bg-black mt-8 w-full"}>
                                    <Select onValueChange={setBirthMonth} defaultValue={birthMonth}>
                                        <SelectTrigger className={"bg-white dark:bg-black"}>
                                            <SelectValue placeholder={"Mois"}/>
                                        </SelectTrigger>
                                        <SelectContent className={"bg-white dark:bg-black"}>
                                            <SelectGroup>
                                                <SelectItem value="01">Janvier</SelectItem>
                                                <SelectItem value="02">Février</SelectItem>
                                                <SelectItem value="03">Mars</SelectItem>
                                                <SelectItem value="04">Avril</SelectItem>
                                                <SelectItem value="05">Mai</SelectItem>
                                                <SelectItem value="06">Juin</SelectItem>
                                                <SelectItem value="07">Juillet</SelectItem>
                                                <SelectItem value="08">Août</SelectItem>
                                                <SelectItem value="09">Septembre</SelectItem>
                                                <SelectItem value="10">Octobre</SelectItem>
                                                <SelectItem value="11">Novembre</SelectItem>
                                                <SelectItem value="12">Décembre</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Select onValueChange={setBirthDay} defaultValue={birthDay}>
                                        <SelectTrigger className={"bg-white dark:bg-black"}>
                                            <SelectValue placeholder={"Jour"}/>
                                        </SelectTrigger>
                                        <SelectContent className={"bg-white dark:bg-black"}>
                                            <SelectGroup>
                                                <SelectItem value="01">1</SelectItem>
                                                <SelectItem value="02">2</SelectItem>
                                                <SelectItem value="03">3</SelectItem>
                                                <SelectItem value="04">4</SelectItem>
                                                <SelectItem value="05">5</SelectItem>
                                                <SelectItem value="06">6</SelectItem>
                                                <SelectItem value="07">7</SelectItem>
                                                <SelectItem value="08">8</SelectItem>
                                                <SelectItem value="09">9</SelectItem>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="11">11</SelectItem>
                                                <SelectItem value="12">12</SelectItem>
                                                <SelectItem value="13">13</SelectItem>
                                                <SelectItem value="14">14</SelectItem>
                                                <SelectItem value="15">15</SelectItem>
                                                <SelectItem value="16">16</SelectItem>
                                                <SelectItem value="17">17</SelectItem>
                                                <SelectItem value="18">18</SelectItem>
                                                <SelectItem value="19">19</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="21">21</SelectItem>
                                                <SelectItem value="22">22</SelectItem>
                                                <SelectItem value="23">23</SelectItem>
                                                <SelectItem value="24">24</SelectItem>
                                                <SelectItem value="25">25</SelectItem>
                                                <SelectItem value="26">26</SelectItem>
                                                <SelectItem value="27">27</SelectItem>
                                                <SelectItem value="28">28</SelectItem>
                                                <SelectItem value="29">29</SelectItem>
                                                <SelectItem value="30">30</SelectItem>
                                                <SelectItem value="31">31</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Select onValueChange={setBirthYear} defaultValue={birthYear}>
                                        <SelectTrigger className={"bg-white dark:bg-black"}>
                                            <SelectValue placeholder={"Année"}/>
                                        </SelectTrigger>
                                        <SelectContent className={"bg-white dark:bg-black"}>
                                            <SelectGroup>
                                                {Array.from({length: 120}, (_, i) => 2023 - i).map((year) => (
                                                    <SelectItem key={year} value={year.toString()}>
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {/*<Popover>
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
                            </Popover>*/}
                            </div>
                            <Button className={"w-full mt-8 mx-auto"} variant={"default"} type={"submit"}>
                                Suivant
                            </Button>
                        </form>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className={"flex flex-col items-center space-y-12 pb-8 pt-4 lg:px-16"}>
                        <div>
                            <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>Nous vous avons envoyé
                                un
                                code</h3>
                            <p className={"text-sm text-slate-500"}>Saisissez-le ci-dessous pour verifier {email}</p>
                        </div>

                        <form onSubmit={handleSubmit} className={"w-full"}>
                            <div className={"w-full space-y-1"}>
                                <Input type={"text"} placeholder={"Code de vérification"}
                                       className={"bg-white dark:bg-black"}
                                       onChange={(event) => {
                                           setCode(event.target.value);
                                       }}
                                />
                                <p className={"text-indigo-500 text-sm"}>Vous n'avez pas reçu l'email</p>
                            </div>
                            <Button
                                className={"w-full mt-16 mx-auto"}
                                variant={"default"}
                            >
                                Suivant
                            </Button>
                        </form>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default RegisterModal;