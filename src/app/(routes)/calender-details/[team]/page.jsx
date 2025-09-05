import Nav from "@/components/ui/nav/nav";
import { cookies } from "next/headers";

export async function generateMetadata({params}) {
    const {team} = await params;

    const cookieStore = await cookies();
    const user_token = cookieStore.get("token");

    const response = await fetch(`http://localhost:4000/api/v1/users/${team}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${user_token.value}`
        }
    });
    const json = await response.json();

   return {
        title: json.name,
    }
}

async function TeamPage() {
    
    const instructorResponse = await fetch("http://localhost:4000/api/v1/activities");
        const instructorData = await instructorResponse.json();    
        const matches = instructorData.filter(data => data.name === instructorData.id);    
        const participants = instructorData.filter(user => user.name);
        console.log(matches);
        console.log(instructorData);
        

    return (  
        <>
        <h2>Deltagere</h2>
        <h3></h3>

            <Nav />
        </>
    );
}

export default TeamPage;