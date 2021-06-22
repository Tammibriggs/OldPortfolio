import React from "react"
import "./worksCard.css"

function WorksCard({imageLarge, imageSmall, projName, text, languageImage1, languageName1, languageImage2, languageName2, link, key}){
    return(
            <div className="work" key={key}>
                <div className="work__data">
                    <div className="work__data__images">
                        <img src={imageLarge} alt="project"/>
                        <img src={imageSmall} alt="project"/>
                    </div>
                    <h4>{projName}</h4>
                    <div className="work__data__text">
                        <p>
                            {text}
                        </p>
                        <div className="work__data__text__language">
                            <span><img src={languageImage1} alt="language icon"/> {languageName1}</span>
                            <span><img src={languageImage2} className="work__image2" alt=" language icon"/> {languageName2}</span>
                        </div>  
                    </div>
                    <a href={link} target="_blank" className="work__data__link" >Visit site</a>
                </div>
            </div>
           
    )
    
   
}

export default WorksCard