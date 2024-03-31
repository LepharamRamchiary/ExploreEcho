import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-items">
                <h1>ExploreEcho</h1>
                <ul className="naa-menu">
                    <li>
                        <Link>Home</Link>
                    </li>
                </ul>
            </nav>

        )
    }
}