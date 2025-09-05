import Nav from "@/components/ui/nav/nav";
import "./activity.scss";
import { cookies } from "next/headers";
import AddActivity from "@/components/ui/add-activity/add-activity";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const json = (await response.json());

    return {
        title: json.name,
    }
}

async function ActivitiesDatailsPage({ params }) {


    const { id } = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const json = (await response.json());
    
    console.log(json);
   
    const cookieStore = await cookies();
    const user_role = cookieStore.get("role");
    if (user_role.value === "instructor") {
        return (
            <>
                <article className="activity" >
                    <div className="activity__hero">
                        <img src={json.asset.url} alt={json.name} className="activity__hero__img" />
                    </div>
                    <section className="activity__info">
                        <h3 className="activity__info__class">{json.name}</h3>
                        <span className="activity__info__age">{json.minAge} - {json.maxAge} år</span>
                        <span className="activity__info__date">{json.weekday}, kl. {json.time}</span>
                        <p className="activity__info__decsription">{json.description}</p>
                    </section>
                </article>
                <Nav />
            </>
        );

    } else {
        return (
            <>
                <article className="activity" >
                    <div className="activity__hero">
                        <img src={json.asset.url} alt={json.name} className="activity__hero__img" />
                        <AddActivity className="activity__hero__submit"/>
                    </div>
                    <section className="activity__info">
                        <h3 className="activity__info__class">{json.name}</h3>
                        <span className="activity__info__age">{json.minAge} - {json.maxAge} år</span>
                        <span className="activity__info__date">{json.weekday}, kl. {json.time}</span>
                        <p className="activity__info__decsription">{json.description}</p>
                    </section>
                </article>
                <Nav />
            </>
        );
    }

}

export default ActivitiesDatailsPage;