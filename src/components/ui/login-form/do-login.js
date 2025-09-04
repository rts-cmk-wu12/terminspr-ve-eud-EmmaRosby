"use server"
import { cookies } from "next/headers";
import z from "zod";

// Denne kode er taget fra et tidligere projekt

async function DoLogin(prevState, formData) {

    // Get username and password from formData
    let username = formData.get("username");
    let password = formData.get("password");

    // Ensure username and password are strings, not null
    // If missing, return error messages for each field
    if (typeof username !== "string" || typeof password !== "string") {
        return {
            success: false,
            errors: [
                !username ? "Brugernavn mangler" : "",
                !password ? "Adgangskode mangler" : ""
            ]
        };
    }

    // Validate input using zod schema
    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal udfyldes" }),
        password: z.string().min(1, { message: "Adgangskode skal udfyldes" }),
    });

    // Parse and validate the input
    const validated = schema.safeParse({ username, password });
    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    // Step 1: Send login request to API to get token
    const tokenRequest = {
        username: validated.data.username,
        password: validated.data.password
    };
    console.log("Login payload:", tokenRequest);
    let tokenJson;
    try {
        // Send POST request to API
        const tokenResponse = await fetch('http://localhost:4000/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tokenRequest)
        });
        // If API returns error status, show login error for both fields
        if (!tokenResponse.ok) {
            return {
                success: false,
                properties: {
                    username: { errors: "Brugernavn eller adgangskode er forkert" },
                    password: { errors: "Brugernavn eller adgangskode er forkert" }
                }
            };
        }
        // Parse JSON response
        tokenJson = await tokenResponse.json();
    } catch (err) {
        // Network or JSON error, show server error for both fields
        return {
            success: false,
            properties: {
                username: { errors: "Serverfejl. Prøv igen senere." },
                password: { errors: "Serverfejl. Prøv igen senere." }
            }
        };
    }
    console.log("API response:", tokenJson);

    // If token is missing, show login error for both fields
    if (!tokenJson.token) {
        return {
            success: false,
            properties: {
                username: { errors: "Brugernavn eller adgangskode er forkert" },
                password: { errors: "Brugernavn eller adgangskode er forkert" }
            }
        };
    }

    // Step 2: Use token to get user info from API
    // Get userId from tokenJson, fallback to 1 for demo
    const userId = tokenJson.userId || 1;
    const userResponse = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenJson.token}`,
            'Content-Type': 'application/json'
        }
    });
    const userJson = await userResponse.json();
    
    // Step 3: Detect role from userJson
    let role = "user";
    if (userJson.role === "instructor") {
        role = "instructor";
    } else if (userJson.role) {
        role = userJson.role;
    }
    
    // Step 4: Store token and login info in cookies (non-httpOnly for client access)
    const cookieStore = cookies();
    cookieStore.set("token", tokenJson.token, {
        maxAge: 60 * 60 * 8, //8 timer
    });
    cookieStore.set("isLoggedIn", "true", {
        maxAge: 60 * 60 * 8,
    });
    cookieStore.set("role", role, {
        maxAge: 60 * 60 * 8,
    });
    cookieStore.set("username", userJson.username || validated.data.username, {
        maxAge: 60 * 60 * 8,
    });
    cookieStore.set("userId", userJson.id, {
        maxAge: 60 * 60 * 8,
    });
    
    console.log(userJson.username);
    return {
        success: true,
        user: userJson,
        role,
        token: tokenJson.token
    };
}

export default DoLogin;