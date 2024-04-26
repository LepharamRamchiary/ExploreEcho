import { Component } from "react";
import { MenuItem } from "./MenuItem";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";



class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navbar-items">
                <a className="navbar-logo" href="/">ExploreEcho</a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}</Link>
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