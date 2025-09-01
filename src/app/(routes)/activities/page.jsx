import Nav from "@/components/ui/nav/nav";
import "./activities-page.scss";
import ActivityCard from "@/components/ui/activity-card/activity-card";

async function ActivitiesPage() {


    return (  
        <>
        <main className="activities-page">
            <h2 className="activities-page__headline">Aktiviteter</h2>
            <Nav />
            <ActivityCard />
        </main>
        </>
    );
}

export default ActivitiesPage;