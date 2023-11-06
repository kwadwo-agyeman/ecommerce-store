import React from "react";
import "./card.css"
export default function Card(props) {
   return (
      <article /*className={props.darkMode ? "dark": ""}*/>
         <div className={"card-comp"+(props.darkMode ? "dark": "")}>
         <img className={"img--cover"+ (props.darkMode ? "dark": "")} src= {props.img} alt={props.brand} />
         <section className={"details"+(props.darkMode ? "dark": "")}>
         <h3>{props.brand}</h3>
         <h4>{"$" + props.price}</h4>
         </section>
         </div>
      </article>
   );
}
