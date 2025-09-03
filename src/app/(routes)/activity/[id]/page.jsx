import Nav from "@/components/ui/nav/nav";
import "./activity.scss";
export async function generateMetadata({ params }) {
    const {id} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const json = (await response.json());   

    return {
        title: json.name,
    }
}



async function ActivitiesDatailsPage({params}) {

    const {id} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const json = (await response.json());

console.log(json);

    return (  
        <>
        <article className="activity" >
            <div className="activity__hero">
                <img src={json.asset.url} alt={json.name} className="activity__hero__img" />
                <button className="activity__hero__submit">Tilmeld</button>
            </div>
            <section className="activity__info">
                <h2 className="activity__info__class">{json.name}</h2>
                <span className="activity__info__age">{json.minAge} - {json.maxAge} år</span>
                <span className="activity__info__date">{json.weekday}, kl. {json.time}</span>
                <p className="activity__info__decsription">{json.description}</p>

            </section>
        </article>
        <Nav />
        </>
    );
}

export default ActivitiesDatailsPage;