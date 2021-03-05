import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

import {auth, provider} from '../firebase';

function Login() {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .catch(err => alert(err.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png"
                    alt=""
                />
            </div>

            <Button 
                startIcon={ 
                    <img
                        style={{
                            height: "30px",
                            paddingRight: "20px"
                        }} 
                        src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" 
                        alt=""
                    />
                }
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login;