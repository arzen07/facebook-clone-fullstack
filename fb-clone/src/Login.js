import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue} from "./StateProvider"

function Login() {

    const [state, dispatch] = useStateValue();

        const signIn = () =>{
            //sign in with google auth 
            auth
            .signInWithPopup(provider)
            .then((result) => {
              dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error ) => alert(error.message));
        };

  return (
    <div className='login'>
        <div className='login__logo'>
            <img 
            src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
            />
            <img className='image__text'
            src ="https://upload.wikimedia.org/wikipedia/commons/archive/8/89/20200802174122%21Facebook_Logo_%282019%29.svg"
            alt=""
            />

        </div>
        <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
</div>
  )
}

export default Login