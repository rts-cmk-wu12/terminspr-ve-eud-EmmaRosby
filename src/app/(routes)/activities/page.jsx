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
                <li key={activity.id}>
                    <ActivityCard activity={activity}/>
                </li>
            )};            
            <Nav />
        </main>
        </>
    );
}

export default ActivitiesPage;