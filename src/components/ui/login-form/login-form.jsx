"use client";

import DoLogin from "./do-login";
import "./login-form.scss"

import { useActionState, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

function LoginForm() {
    const [formState, formAction, isPending] = useActionState(DoLogin);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Check cookies for login status
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };
        const loggedIn = getCookie("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
        setUsername(getCookie("username") || "");
    }, [formState]);

    const handleLogout = () => {
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        setUsername("");
    };

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    if (isPending) {
        return (
            <div className="login-loader">
                <DotLoader
                    color="#e2e2e2ff"
                    loading={true}
                    cssOverride={override}
                    size={20}
                />
            </div>
        );
    }

    if (isLoggedIn) {
        return (
            <section className="login-form">
                <h3 className="login-form__form__headline">Velkommen {username}</h3>
                <button className="login-form__form__submit" onClick={handleLogout}>Log ud</button>
            </section>
        );
    }

    return (
        <section className="login-form">
            <form action={formAction} className="login-form__form">
                <h3 className="login-form__form__headline">Log ind</h3>
                <div>
                    <label>
                        <input type="text" name="username" id="username" placeholder="brugernavn" className="login-form__form__input" />
                        <p>{formState?.properties?.username?.errors}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" name="password" id="password" placeholder="adgangskode" className="login-form__form__input" />
                        <p>{formState?.properties?.password?.errors}</p>
                    </label>
                </div>
                <button type="submit" className="login-form__form__submit">Log ind</button>
                <p>{formState?.errors}</p>
            </form>
        </section>
    );
}

export default LoginForm;