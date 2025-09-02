
export async function generateMetadata({ params }) {
    const {activityId} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
    const json = (await response.json())[0];
    return {
        title: json.name
    }
}



async function ActivitiesDatailsPage({params}) {

    const {activityId} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`)
    const json = (await response.json())[0];

    return (  
        <>
        <p>{json.name}</p>

        
        </>
    );
}

export default ActivitiesDatailsPage;