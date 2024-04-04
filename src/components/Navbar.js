import { Component } from "react";
import { MenuItem } from "./MenuItem";
import "./NavbarStyle.css";



class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">ExploreEcho</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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