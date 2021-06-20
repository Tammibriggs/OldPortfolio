import React from "react"
import "./intro.css"

function Intro(){
    return(
        <div className="div-intro">        
            <div className="wrapper">
                <div className="intro">
                    <span className="intro__span">
                        <span className="intro__span__large">HI,</span> i'm<br/>Taminoturoko Briggs<br/>
                        <span className="intro__span__fullstack">Fullstack</span> web developer<br/>
                        <a href="#recent"><button>Recent works</button></a>
                    </span>
                    
                    <div className="intro__image"></div>
                </div>
            </div>
        </div>
    )
}

export default Intro