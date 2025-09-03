"use client"

import Link from "next/link";
import "./home.scss"
import { useRouter } from "next/navigation";
import { useState } from "react";


function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter(); // En hook der giver adgang til router-objektet og muliggør programmatisk navigation.

    const handleClick = (e) => {
        e.preventDefault(); // Stopper navigation.
        setIsLoading(true); // Viser Loading
        setTimeout(() => {
            router.push("/activities") //Naviger efter delay
        }, 1000); // Delay tid (1 sek)
    };
 
    return (  
        <>
        <main className="start">
            <h1 className="start__headline">
                <span className="start__headline__first">Landrup</span>
                <span className="start__headline__second">dans</span>
            </h1>
            <Link 
                href="/activities" 
                className="start__button"
                onClick={handleClick}
            >
                {isLoading ? "Velkommen" : "Kom i gang"}
                </Link>
        </main>
        </>
    );
}

export default Home;