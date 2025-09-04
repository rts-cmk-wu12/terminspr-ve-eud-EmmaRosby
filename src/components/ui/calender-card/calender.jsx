import Link from "next/link";
import "./calender.scss";



function CalenderCard({ userData }) {


    




    return (
        <>

            <Link href={`/user-calender/${userData.id}`} >
            <div className="calender">
                <h3 className="calender__headline">{userData.name}</h3>
                <span className="calender__time">{userData.weekday} {userData.time}</span>
            </div>
            </Link>
        </>
    );
}

export default CalenderCard;