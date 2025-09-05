import Nav from "@/components/ui/nav/nav";
import "./activities-page.scss";
import ActivityCard from "@/components/ui/activity-card/activity-card";

export const metadata = {
  title: "Activities",
}

async function ActivitiesPage() {

    const response = await fetch("http://localhost:4000/api/v1/activities");
    const activities = await response.json();

    return (  
        <>
        <main className="activities-page">
            <h2 className="activities-page__headline">Aktiviteter</h2>
            {activities.map(activity =>
            <ul key={activity.id}>
                <li >
                    <ActivityCard activity={activity}/>
                </li>

            </ul>
            )};            
            <Nav />
        </main>
        </>
    );
}

export default ActivitiesPage;