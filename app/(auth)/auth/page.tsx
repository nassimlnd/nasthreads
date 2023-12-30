import GithubLoginButton from "@/components/auth/github-login-button";
import GoogleLoginButton from "@/components/auth/google-login-button";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import React from "react";
import LoginModal from "@/components/main/modals/login-modal";
import RegisterModal from "@/components/main/modals/register-modal";

const LoginPage = () => {
    return (
        <div className={"lg:flex h-full py-8 px-8 space-y-12 lg:space-y-0"}>
            <div className={"w-1/2 lg:flex flex-col justify-center items-center space-y-6"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"
                     className={"lg:h-[384px] lg:w-[384px]"}
                >
                    <g filter="url(#filter0_f_47_5580)">
                        <ellipse cx="24.3297" cy="22.7843" rx="13.0797" ry="8.5343" fill="#DBD1F0" fillOpacity="0.5"/>
                    </g>
                    <g filter="url(#filter1_f_47_5580)">
                        <path
                            d="M5.47402 33L4.56527 40.0104C4.5386 40.2161 4.75957 40.3629 4.93887 40.2587L11.0399 36.7106L9.13821 33.3247L5.47402 33Z"
                            fill="url(#paint0_linear_47_5580)"/>
                    </g>
                    <g filter="url(#filter2_i_47_5580)">
                        <path
                            d="M48 23.55C48 33.9053 37.2548 42.3 24 42.3C10.7452 42.3 0 33.9053 0 23.55C0 13.1947 10.7452 4.79999 24 4.79999C37.2548 4.79999 48 13.1947 48 23.55Z"
                            fill="url(#paint1_radial_47_5580)"/>
                        <path
                            d="M48 23.55C48 33.9053 37.2548 42.3 24 42.3C10.7452 42.3 0 33.9053 0 23.55C0 13.1947 10.7452 4.79999 24 4.79999C37.2548 4.79999 48 13.1947 48 23.55Z"
                            fill="url(#paint2_radial_47_5580)"/>
                        <path
                            d="M48 23.55C48 33.9053 37.2548 42.3 24 42.3C10.7452 42.3 0 33.9053 0 23.55C0 13.1947 10.7452 4.79999 24 4.79999C37.2548 4.79999 48 13.1947 48 23.55Z"
                            fill="url(#paint3_radial_47_5580)"/>
                        <path
                            d="M48 23.55C48 33.9053 37.2548 42.3 24 42.3C10.7452 42.3 0 33.9053 0 23.55C0 13.1947 10.7452 4.79999 24 4.79999C37.2548 4.79999 48 13.1947 48 23.55Z"
                            fill="url(#paint4_radial_47_5580)"/>
                        <path
                            d="M48 23.55C48 33.9053 37.2548 42.3 24 42.3C10.7452 42.3 0 33.9053 0 23.55C0 13.1947 10.7452 4.79999 24 4.79999C37.2548 4.79999 48 13.1947 48 23.55Z"
                            fill="url(#paint5_radial_47_5580)"/>
                        <path d="M3.2704 43.4799L4.59782 33.1727L12.8604 39.4759L3.2704 43.4799Z"
                              fill="url(#paint6_radial_47_5580)"/>
                        <path d="M3.2704 43.4799L4.59782 33.1727L12.8604 39.4759L3.2704 43.4799Z"
                              fill="url(#paint7_radial_47_5580)"/>
                        <path d="M3.2704 43.4799L4.59782 33.1727L12.8604 39.4759L3.2704 43.4799Z"
                              fill="url(#paint8_radial_47_5580)"/>
                        <path d="M3.2704 43.4799L4.59782 33.1727L12.8604 39.4759L3.2704 43.4799Z"
                              fill="url(#paint9_radial_47_5580)"/>
                        <path d="M3.2704 43.4799L4.59782 33.1727L12.8604 39.4759L3.2704 43.4799Z"
                              fill="url(#paint10_radial_47_5580)"/>
                    </g>
                    <path
                        d="M16.02 23.85C16.02 25.0926 15.0127 26.1 13.77 26.1C12.5274 26.1 11.52 25.0926 11.52 23.85C11.52 22.6073 12.5274 21.6 13.77 21.6C15.0127 21.6 16.02 22.6073 16.02 23.85Z"
                        fill="black"/>
                    <path
                        d="M16.02 23.85C16.02 25.0926 15.0127 26.1 13.77 26.1C12.5274 26.1 11.52 25.0926 11.52 23.85C11.52 22.6073 12.5274 21.6 13.77 21.6C15.0127 21.6 16.02 22.6073 16.02 23.85Z"
                        fill="url(#paint11_radial_47_5580)" fillOpacity="0.2"/>
                    <path
                        d="M26.28 23.85C26.28 25.0926 25.2727 26.1 24.03 26.1C22.7874 26.1 21.78 25.0926 21.78 23.85C21.78 22.6073 22.7874 21.6 24.03 21.6C25.2727 21.6 26.28 22.6073 26.28 23.85Z"
                        fill="black"/>
                    <path
                        d="M26.28 23.85C26.28 25.0926 25.2727 26.1 24.03 26.1C22.7874 26.1 21.78 25.0926 21.78 23.85C21.78 22.6073 22.7874 21.6 24.03 21.6C25.2727 21.6 26.28 22.6073 26.28 23.85Z"
                        fill="url(#paint12_radial_47_5580)" fillOpacity="0.2"/>
                    <path
                        d="M36.54 23.85C36.54 25.0926 35.5327 26.1 34.29 26.1C33.0474 26.1 32.04 25.0926 32.04 23.85C32.04 22.6073 33.0474 21.6 34.29 21.6C35.5327 21.6 36.54 22.6073 36.54 23.85Z"
                        fill="black"/>
                    <path
                        d="M36.54 23.85C36.54 25.0926 35.5327 26.1 34.29 26.1C33.0474 26.1 32.04 25.0926 32.04 23.85C32.04 22.6073 33.0474 21.6 34.29 21.6C35.5327 21.6 36.54 22.6073 36.54 23.85Z"
                        fill="url(#paint13_radial_47_5580)" fillOpacity="0.2"/>
                    <defs>
                        <filter id="filter0_f_47_5580" x="6.25" y="9.25" width="36.1597" height="27.0686"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_47_5580"/>
                        </filter>
                        <filter id="filter1_f_47_5580" x="3.56299" y="32" width="8.47705" height="9.29309"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_47_5580"/>
                        </filter>
                        <filter id="filter2_i_47_5580" x="0" y="4.79999" width="48" height="38.6899"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="0.01"/>
                            <feGaussianBlur stdDeviation="0.25"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_47_5580"/>
                        </filter>
                        <linearGradient id="paint0_linear_47_5580" x1="7.76993" y1="40.9313" x2="12.153" y2="32.7217"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DCD0F4"/>
                            <stop offset="1" stopColor="#DED0F9" stopOpacity="0"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(35.9735 7.18226) rotate(108.104) scale(31.0089 73.2897)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#D7C6DE"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(16.0596 35.6034) rotate(-117.536) scale(34.7385 49.2805)">
                            <stop offset="0.618897" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint3_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(43.8962 37.1546) rotate(-170.706) scale(50.7724 75.8602)">
                            <stop offset="0.781471" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint4_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(16.9161 39.3707) rotate(-39.5437) scale(49.4266 71.9874)">
                            <stop offset="0.644692" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint5_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(22.6975 10.1186) rotate(81.4638) scale(46.1625 49.6949)">
                            <stop offset="0.464136" stopColor="#B6A8F2" stopOpacity="0"/>
                            <stop offset="1" stopColor="#B6A8F2"/>
                        </radialGradient>
                        <radialGradient id="paint6_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(35.9735 7.18226) rotate(108.104) scale(31.0089 73.2897)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#D7C6DE"/>
                        </radialGradient>
                        <radialGradient id="paint7_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(16.0596 35.6034) rotate(-117.536) scale(34.7385 49.2805)">
                            <stop offset="0.618897" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint8_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(43.8962 37.1546) rotate(-170.706) scale(50.7724 75.8602)">
                            <stop offset="0.781471" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint9_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(16.9161 39.3707) rotate(-39.5437) scale(49.4266 71.9874)">
                            <stop offset="0.644692" stopColor="#CECECE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#CECECE"/>
                        </radialGradient>
                        <radialGradient id="paint10_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(22.6975 10.1186) rotate(81.4638) scale(46.1625 49.6949)">
                            <stop offset="0.464136" stopColor="#B6A8F2" stopOpacity="0"/>
                            <stop offset="1" stopColor="#B6A8F2"/>
                        </radialGradient>
                        <radialGradient id="paint11_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(34.29 23.85) rotate(90) scale(2.25)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint12_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(34.29 23.85) rotate(90) scale(2.25)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint13_radial_47_5580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(34.29 23.85) rotate(90) scale(2.25)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
                <h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl hidden lg:block"}>NasThreads</h1>
            </div>
            <div className={"w-fit flex flex-col justify-center space-y-6"}>
                <h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Ça se passe
                    maintenant</h1>
                <h2 className={"scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"}>Inscrivez-vous</h2>
                <div className={"flex flex-col space-y-2"}>
                    <GithubLoginButton className={"w-[300px]"}/>
                    <GoogleLoginButton className={"w-[300px]"}/>
                </div>
                <div className={"flex items-center space-x-2 max-w-[300px]"}>
                    <Separator orientation={"horizontal"} className={"w-[130px]"}/>
                    <p>ou</p>
                    <Separator orientation={"horizontal"} className={"w-[130px]"}/>
                </div>
                <div className={"space-y-1.5"}>
                    <RegisterModal />
                    <p className={"text-slate-500 text-xs w-[300px]"}>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité,
                        notamment l'Utilisation des cookies.</p>
                </div>
                <div className={"space-y-3"}>
                    <h4 className={"scroll-m-20 text-xl font-semibold tracking-tight"}>Vous avez déjà un compte ?</h4>
                    <LoginModal />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;