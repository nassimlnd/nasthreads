'use client'

import React, {Component} from 'react';
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import {signIn} from "next-auth/react";

class GithubLoginButton extends Component {
    render() {
        return (
            <Button
                onClick={async () => await signIn('github')}
                type={'button'} variant={'primary'}
            >
                <Github/>
                Continuer avec Github
            </Button>
        );
    }
}

export default GithubLoginButton;