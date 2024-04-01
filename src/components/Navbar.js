import { Component } from "react";
import { MenuItem } from "./MenuItem";
import "./NavbarStyle.css";



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">ExploreEcho</h1>
                <ul className="naa-menu">
                    {MenuItem.map((item, index) => {
                        return (
                            <li>
                                <a className={item.cName} href="/">
                                    <i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>

        )
    }
}

export default Navbar;