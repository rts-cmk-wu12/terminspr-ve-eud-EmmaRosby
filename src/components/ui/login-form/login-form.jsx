"use client";
import DoLogin from "./do-login";
import "./login-form.scss"

import { useActionState } from "react";
import { CircleLoader } from "react-spinners";

function LoginForm() {
    const [formState, formAction, isPending] = useActionState(DoLogin)
    
    
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    }

    return isPending ? (
        //npm i react-spinners
        <CircleLoader
            color="#134c81ff" 
            loading={true} 
            cssOverride={override} 
            size={50} 
        />
    ) : (  
        <>
        <section className="login-form">
            <h2 className="login-form__headline">Log ind</h2>
            <form action={formAction} className="login-form__form">
                <div>
                    <label>
                        <input type="text" name="brugernavn" id="username" placeholder="brugernavn" className="login-form__form__input"/>
                        <p>{formState?.properties?.username?.errors}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" name="adgangskode" id="password" placeholder="adgangskode" className="login-form__form__input"/>
                         <p>{formState?.properties?.password?.errors}</p>
                    </label>
                </div>
                <button type="submit" className="login-form__form__submit">Log ind</button>
                <p>{formState?.errors}</p>
            </form>
        </section>
        </>
    );
}

export default LoginForm;