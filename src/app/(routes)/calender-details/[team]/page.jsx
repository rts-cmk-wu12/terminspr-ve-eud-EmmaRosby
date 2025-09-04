export async function TeamPage({params}) {
    const {team} = await params

    const response = await fetch(`http://localhost:4000/api/v1/users/${team}`)
    const json = (await response.json());   
   return {
        title: json.name,
    }
}
