import Logo from "~/components/Logo";
import Link from "next/link";
import Button from "~/components/buttons/Button";
import GoogleIcon from "~/components/icons/GoogleIcon";
import FacebookIcon from "~/components/icons/FacebookIcon";
import Image from "next/image";
import Input from "~/components/inputs/Input";
import Eye from "~/components/icons/Eye";

export default function HomePage() {
    return (
        <main
            className="flex h-screen">
            <div className={'w-2/3 px-16 py-10 text-center'}>
                <div className={'flex justify-between items-center'}>
                    <Logo/>
                    <p>Vous n'avez pas de compte ? <Link href={'/register'}><span className={'text-primary-medium'}>Rejoignez-nous !</span></Link>
                    </p>
                </div>
                <div className={'mt-36'}>
                    <h4 className={'text-4xl font-extrabold'}>Welcome back !</h4>
                    <p className={'text-base text-slate-600 dark:text-slate-300'}>Connectez-vous à votre compte</p>

                    <div className={'flex space-x-2 justify-center mt-12'}>
                        <Button size={'large'} style={'secondary'} type={'button'}>
                            <GoogleIcon/>
                            Se connecter avec Google
                        </Button>
                        <Button size={'large'} style={'secondary'} type={'button'}>
                            <FacebookIcon/>
                            Se connecter avec Facebook
                        </Button>
                    </div>
                </div>
                <p className={'mt-12'}>Ou continuer avec</p>
                <form>
                    <div className={'space-y-6 mt-12 w-fit mx-auto'}>
                        <Input style={'primary'} type={'email'} placeholder={'Adresse e-mail'} size={'large'}
                               className={'w-[450px]'}/>
                        <Input style={'primary'} type={'password'} placeholder={'Mot de passe'} size={'large'}
                               className={'w-[450px]'} icon={<Eye className={'fill-slate-500'}/>}/>
                    </div>
                    <div className={'flex justify-between w-[450px] mx-auto mt-4'}>
                        <div className={'flex items-center space-x-2'}>
                            <input type={'checkbox'} className={'w-4 h-4 rounded-sm bg-slate-300 dark:bg-slate-600'}/>
                            <p className={'text-slate-600 dark:text-slate-300'}>Se souvenir de moi</p>
                        </div>
                        <Link href={'/forgot-password'}><span
                            className={'text-danger-medium'}>Mot de passe oublié ?</span></Link>
                    </div>
                    <Button type={'submit'} style={'primary'} size={'large'} className={'mx-auto mt-14'}>
                        Se connecter
                    </Button>
                </form>
            </div>
            <Image src={'/assets/images/image_login.png'} alt={'Login image'} width={600} height={600}
                   className={'w-1/3 dark:opacity-70'}/>
        </main>
    );
}
