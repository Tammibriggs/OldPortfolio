import React, {Component} from "react"
import "./works.css"
import worksData from  "./worksData"
import WorksCard from "./WorksCard"

class Works extends Component{

    componentDidMount() {
        const workImage2 = document.getElementsByClassName("work__image2")
       
        for(const i of workImage2){
            if(i.getAttribute("src") === ""){
                i.style.display = "none"
            }
        }
        }

    render(){
        return(
            <div className="wrapper">
                 <div className="div-works">
                    <span id="recent">Recent works</span>
                    <div className="line"></div>
                    <div className="works">
                    {worksData.map((item) => {
                            return (<WorksCard 
                                imageLarge = {item.imageLarge}
                                imageSmall = {item.imageSmall}
                                projName = {item.name}
                                text = {item.text}
                                languageImage1 = {item.languageImage1}
                                languageName1 = {item.languageName1}
                                languageImage2 = {item.languageImage2}
                                languageName2 = {item.languageName2}
                                link = {item.link}
                                key = {item.id}
                            />)
                    })}
                    </div>
                </div>
            </div>
           
        )
    }
   
}

export default Works