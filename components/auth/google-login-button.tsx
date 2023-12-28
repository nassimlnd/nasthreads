'use client'

import React, {Component} from 'react';
import {signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import GoogleIcon from "@/components/icons/google-icon";

class GoogleLoginButton extends Component {
    render() {
        return (
            <Button
                onClick={async () => await signIn('google')}
                type={'button'} variant={'primary'}
            >
                <GoogleIcon />
                Continuer avec Google
            </Button>
        );
    }
}

export default GoogleLoginButton;