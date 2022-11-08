import React, { useState } from 'react';
import SignUp from "./SignUp";
import Login from "./Login";


const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true)

    return (
        <div className="connect-header">
            <div className="connect-modal">
                <div className="header-btn">
                    <button
                        style={{ background: signUp ? "#202020" : "#363636" }}
                        onClick={() => setSignUp(true)}
                    >S'inscrire</button>
                    <button
                        style={{ background: signUp ? "#363636" : "#202020" }}
                        onClick={() => setSignUp(false)}
                    >Se connecter</button>
                </div>
                {signUp ? <SignUp /> : <Login />}
            </div>
        </div>
    );
};

export default ConnectModal;