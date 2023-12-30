'use client'

import React, {Component} from 'react';
import {signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import GoogleIcon from "@/components/icons/google-icon";
import {cn} from "@/lib/utils";

type Props = {
    className? : string
}


class GoogleLoginButton extends Component<Props> {
    render() {
        return (
            <Button
                onClick={async () => await signIn('google')}
                type={'button'} variant={'default'}
                className={cn("w-fit gap-2", this.props.className)}
            >
                <GoogleIcon />
                Continuer avec Google
            </Button>
        );
    }
}

export default GoogleLoginButton;