"use client"

import { useState } from "react";

function AddActivity() {


    const [value, setValue] = useState("Tilmeld")
    const addHandle = (event) => {
        setValue (prev => (prev === "Tilmeld" ? "Afmeld" : "Tilmeld"))
    }
    return (  
        <>
            <button 
                className="activity__hero__submit"
                onClick={addHandle}    
            >{value}</button>
        </>
    );
}

export default AddActivity;