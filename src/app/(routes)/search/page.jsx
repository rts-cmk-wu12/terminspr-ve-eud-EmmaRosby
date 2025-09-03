import ActivityCard from "@/components/ui/activity-card/activity-card";
import Nav from "@/components/ui/nav/nav";
import SearchBar from "@/components/ui/search-fom/search-bar";
import "./search.scss";

export const metadata = {
  title: "Søg",
}

async function SearchPage() {

     const response = await fetch("http://localhost:4000/api/v1/activities");
    const activities = await response.json();

    return (  
        <>
        <main className="search-page">
            <SearchBar />
            <h2 className="search-page__headline">Søg</h2>
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

export default SearchPage;