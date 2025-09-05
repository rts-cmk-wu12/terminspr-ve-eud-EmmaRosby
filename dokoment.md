# Dokumentation for Landrup Dans
Emma Rosby, WU12

# Sådan kommer du i gang  
### Kør Api
- Åben: https://github.com/rts-cmk/landrup-dans-api
- Åben ny terminal
- `npm install`
- `npm start`
- Sørg for at den køre på localhost:4000
### Kør Landrup Dans
- Åben terminal
- `npm install`
- `npm run dev`


# Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js, som gør det muligt at bygge moderne webapplikationer med server-side rendering og mappebaseret routing. Jeg bruger Next.js til at strukturere projektet og håndtere både klient- og server-side funktioner.

* **React**  
Et bibliotek der gør det nemt at opdele brugerfladen i genanvendelige komponenter og håndtere state. React bruges til at bygge alle sider og komponenter i Landrup Dans.

* **Git**  
Et versionsstyringsværktøj, som jeg bruger til at holde styr på ændringer i koden og samarbejde via GitHub. Det gør det nemt at arbejde med branches og gå tilbage til tidligere versioner, hvis der opstår fejl.

* **React-icons**  
Et ikon-bibliotek til React, som jeg bruger til at tilføje ikoner i brugerfladen, fx til navigation og knapper.

* **SASS**  
Et CSS værktøj, som gør det muligt at bruge variabler, mixins og nesting i min styling. Jeg bruger SASS til at organisere og genbruge min CSS i projektet.

* **API Landrup Dans**  
Et eksternt API, som jeg henter data fra, til aktiviteter, brugere og login. API’et ligger på GitHub og kører med localhost.

* **Zod**  
Et valideringsbibliotek til JavaScript, som jeg bruger til at validere brugerinput i formularer, fx ved login.

## Kode-eksempel
<!--  (app/(routes)/activity/[id]/page.jsx) -->

```jsx
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
                    <h2 className="activity__info__class">{json.name}</h2>
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
```

## Forandringer
* **Navigation**  
Jeg gar lavet en side til login, så det er nemt at komme til login siden.
* **Søge siden**
Jeg har delt siden op med en hvid linje, så det er nemmerre at se hvad der er søgt på og alle aktiviteter.
* **Log ud**
Jeg har bessluttet mig for at lave en log ud function, både da det er standart og gør det nemmere for mig at teste.