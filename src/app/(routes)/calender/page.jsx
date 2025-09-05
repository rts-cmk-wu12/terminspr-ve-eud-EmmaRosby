import CalenderCard from "@/components/ui/calender-card/calender";
import Nav from "@/components/ui/nav/nav";
import { cookies } from "next/headers";

async function CalenderPage() {

    const cookieStore = await cookies();
    const user_id = cookieStore.get("userId");
    const user_role = cookieStore.get("role");
    const user_token = cookieStore.get("token");

    const userResponse = await fetch(`http://localhost:4000/api/v1/users/${user_id.value}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${user_token.value}`
        }
    });
    const userData = await userResponse.json();

    if (user_role.value === "instructor") {
        const instructorResponse = await fetch("http://localhost:4000/api/v1/activities");
        const instructorData = await instructorResponse.json();
        const matches = instructorData.filter(instructor => instructor.instructorId == user_id.value);

        if (matches.length > 0) {
            console.log("match");
            return (
                <main className="calender-page">
                    <h2>Kalender</h2>
                    {matches.map(instructorData =>
                        <ul key={instructorData.id}>
                            <li >
                                <CalenderCard userData={userData} instructorData={instructorData} user_role={user_role.value} />
                            </li>
                        </ul>
                    )}
                    <Nav />
                </main>
            )

        } 
    } else {
        console.log("no match");
        return (

            <main className="calender-page">
                <h2>Kalender</h2>
                {userData.activities.map(userData =>
                    <ul key={userData.id}>
                        <li >
                            <CalenderCard instructorData={instructorData} userData={userData} user_role={user_role.value} />
                        </li>
                    </ul>
                )}
                <Nav />
            </main>

        );
    };




}

export default CalenderPage;