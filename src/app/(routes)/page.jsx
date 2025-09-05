"use client"

import Link from "next/link";
import "./home.scss"
import { useState } from "react";


function Home() {
    const [isLoading, setIsLoading] = useState(false)
    
 
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
            >
                Kom i gang!
                </Link>
        </main>
        </>
    );
}

export default Home;