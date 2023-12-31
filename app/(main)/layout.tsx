'use client'

import React, {useLayoutEffect} from 'react';

interface Props {
    children?: React.ReactNode;
}

function MainLayout({children}: Props) {

    return (
        <>
            {children}
        </>
    );
}

export default MainLayout;