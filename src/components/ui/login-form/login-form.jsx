"use client";
import "./login-form.scss"

import { useActionState } from "react";


function LoginForm() {
    // const [formsSate, formAction, isPending] = useActionState(DoLogin)
    return (  
        <>
        <section className="login-form">
            <h2 className="login-form__headline">Log ind</h2>
            <form /* action={formAction} */ className="login-form__form">
                <input type="text" name="brugernavn" id="username" placeholder="brugernavn" className="login-form__form__input"/>
                <input type="password" name="adgangskode" id="password" placeholder="adgangskode" className="login-form__form__input"/>
                <button type="submit" className="login-form__form__submit">Log ind</button>
            </form>
        </section>
        </>
    );
}

export default LoginForm;