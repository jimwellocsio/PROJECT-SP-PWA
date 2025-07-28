'use client';
import React, { useEffect } from 'react'
import { LoginPage } from 'project-sp-components';
import { useRouter } from 'next/navigation';
import styles from './login.module.css'; // Import the CSS module for styling


const Login = () => {
    return(
        <LoginPage onSubmit={
            (username, password, rememberMe) => {
                console.log('Login submitted:', { username, password, rememberMe });
            }
        } />
    )
}

export default Login