import Link from "next/link";
import "./home.scss"

function Home() {

    
    return (  
        <>
        <main className="start">
            <h1 className="start__headline">
                <span className="start__headline__first">Landrup</span>
                <span className="start__headline__second">dans</span>
            </h1>
            <Link href="http://localhost:3000/activities" className="start__button">Kom i gang</Link>
        </main>
        </>
    );
}

export default Home;