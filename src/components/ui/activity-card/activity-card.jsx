import Link from "next/link";
import "./activity-card.scss";

async function ActivityCard() {

    const response = await fetch("http://localhost:4000/api/v1/activities");
    const activities = await response.json();
    console.log();
    

    return (  
        <>
        {activities.map(activity =>
            <Link href="http://localhost:3000/activity" key={activity.id} >
                <article className="activity-card">
                    <img src={activity.asset.url} alt={activity.name} className="activity-card__img"/>
                    <div className="activity-card__info">
                        <h2 >{activity.name}</h2>
                        <span>{activity.minAge}-{activity.maxAge}år</span>
                    </div>
                </article>
            </Link>            
        )}
        </>
    );
}

export default ActivityCard;