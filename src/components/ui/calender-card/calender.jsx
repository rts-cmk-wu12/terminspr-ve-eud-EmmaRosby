import Link from "next/link";
import "./calender.scss";



function CalenderCard({ userData, user_role, instructorData }) {

    const isInstructor = user_role === 'instructor';
console.log(instructorData);

    const cardContentUser = (
        <div
            className="calender"
            style={{ cursor: isInstructor ? 'pointer' : 'not-allowed' }}
        >
            <h3 className="calender__headline">{userData.name}</h3>
            <span className="calender__time">{userData.weekday} {userData.time}</span>
        </div>
    );

    const cardContentInstructor = (
        <div
            className="calender"
            style={{ cursor: isInstructor ? 'pointer' : 'not-allowed' }}
        >
            <h3 className="calender__headline">{instructorData.name}</h3>
            <span className="calender__time">{instructorData.weekday} {instructorData.time}</span>
            
        </div>
    );





    return (
        <>
            {isInstructor ? (
                <Link href={`/calender-details/${userData.id}`}>{cardContentInstructor}</Link>
            ) : (
                cardContentUser
            )}
        </>
    );
}

export default CalenderCard;