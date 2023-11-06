import React from "react";
import "./btn.css"
export default function Btn(props){
    console.log(props)
    return(
    <div className={props.darkMode ? "dark": ""} >
        <button onClick={props.categorize} className="filter-btn"><span className="btn--text">{props.btn}</span></button>
    </div>
    )
}