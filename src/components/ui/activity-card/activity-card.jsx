import Link from "next/link";
import "./activity-card.scss";

function ActivityCard({ activity }) {
    return (
        <>
            <Link href={`/activity/${activity.id}`} >
                <article className="activity-card">
                    <img src={activity.asset.url} alt={activity.name} className="activity-card__img" />
                    <div className="activity-card__info">
                        <h3>{activity.name}</h3>
                        <span>{activity.minAge} - {activity.maxAge} år</span>
                    </div>
                </article>
            </Link>
        </>
    );
}

export default ActivityCard;