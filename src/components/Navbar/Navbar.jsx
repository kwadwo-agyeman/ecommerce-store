import React from "react";
import "./nav.css"
export default function Navbar(props){
    console.log(props)
    return(
        <nav className={props.darkMode ? "dark" : ""} >
            <a href="/Dummy">dummy </a>
            <div className="nav--container">
                <h3>STORE</h3>
                <div className="toggle--container">
                    <p className="toggle--light">Light</p>
                    <div className="toggle--slider" onClick={props.toggle}>
                        <div className="toggle--slide--circle"></div>
                    </div>
                    <p className="toggle--dark">Dark</p>
                </div>
            </div>
        </nav>
    )
}