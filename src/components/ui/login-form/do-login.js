"use server"
import { cookies } from "next/headers";
import z from "zod";

async function DoLogin(prevState, formData) {

    const username = formData.get("username");
    const password = formData.get("password");
    
    const schema = z.object({
        username: z.string().min(1 , { message: "Brugernavn skal udfyldes" }),
        password: z.string().min(1 , { message: "Adgangskode skal udfyldes" }),
    })

    const validated = schema.safeParse({
        username, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    const response = await fetch(`http://localhost:4000/api/v1/users/${validated.data.username}`); // api i stedet for access token
    const json = await response.json();   

    console.log(json);
    if (!json.length) return {
        succes: false,
        errors: ["Brugernavn eller adgangskode er forkert"],
    };
    
    if (json[0].password === validated.data.password) {
        // lav en cookie. hvis der ikke er en tid på er det en session-cookie, som slettes når browseren lukkes.
        const cookieStore = await cookies();
        cookieStore.set("hello", "Du er nu logget ind", {
            maxAge:  60 * 30, // 30 min
        });
    }
    return validated;
    
}

export default DoLogin;