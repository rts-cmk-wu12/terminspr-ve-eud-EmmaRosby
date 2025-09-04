import CalenderCard from "@/components/ui/calender-card/calender";
import Nav from "@/components/ui/nav/nav";

import { cookies } from "next/headers";

async function CalenderPage() {

    const cookieStore = await cookies();
    const user_id = cookieStore.get("userId");
    const user_token = cookieStore.get("token");

    const response = await fetch(`http://localhost:4000/api/v1/users/${user_id.value}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${user_token.value}`
        }
    });
    const data = await response.json();
    console.log(data);


    return (
        <>
            <main className="calender-page">
                <h2>Kalender</h2>
                {data.activities.map(userData =>
                    <li key={userData.id}>
                        <CalenderCard userData={userData}/>
                    </li>
                )}
                <Nav />
            </main>
        </>
    );
}

export default CalenderPage;