'use client'

import React, {Component} from 'react';
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import {signIn} from "next-auth/react";
import {cn} from "@/lib/utils";

type Props = {
    className? : string
}

class GithubLoginButton extends Component<Props> {
    render() {
        return (
            <Button
                onClick={async () => await signIn('github')}
                type={'button'} variant={'default'}
                className={cn("w-fit gap-2", this.props.className)}
            >
                <Github/>
                Continuer avec Github
            </Button>
        );
    }
}

export default GithubLoginButton;