import React, { useRef } from 'react';
import { auth } from '../utils/firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
    const loginEmail = useRef();
    const loginPassword = useRef();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail.current.value,
                loginPassword.current.value)
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='login-container'>
            <div className="login">
                <h3>Se connecter</h3>
                <form onSubmit={e => handleLogin(e)}>
                    <input type="email" placeholder='Email' ref={loginEmail} required />
                    <input type="password" placeholder='Mot de passe' ref={loginPassword} required />
                    <input type="submit" value='Se connecter' />
                </form>

            </div>

        </div>
    );
};

export default Login;