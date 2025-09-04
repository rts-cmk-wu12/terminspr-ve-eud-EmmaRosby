import Link from "next/link";
import "./nav.scss"
import { AiOutlineHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

function Nav() {
    return (
        <>
            <nav className="navigation">
                <Link href="http://localhost:3000/activities" className="navigation__items">
                    <AiOutlineHome className="navigation__items__icon"/>
                </Link>
                <Link href="http://localhost:3000/search" className="navigation__items">
                    <IoSearch className="navigation__items__icon" />
                </Link>
                <Link href="http://localhost:3000/calender" className="navigation__items" >
                    <FaRegCalendarAlt className="navigation__items__icon"/>
                </Link>
                <Link href="http://localhost:3000/login" className="navigation__items" >
                    <CiUser className="navigation__items__icon"/>
                </Link>
            </nav>
        </>
    );
}

export default Nav;