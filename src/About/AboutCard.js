import React from "react"
import "./aboutCard.css"

function AboutCard({icon, heading, description, list1, list2, list3, key}){
    return(
    <div className="section section--design" key={key}>
        <img src={icon} alt="icon"/>
        <h2>{heading}</h2>
        <span>
            {description}
            <ul className="ul">
                <li className="li">{list1}</li>
                <li className="li">{list2}</li>
                <li className="li">{list3}</li>
            </ul>
        </span>
    </div>
    )
}

export default AboutCard