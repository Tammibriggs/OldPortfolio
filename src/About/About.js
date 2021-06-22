import React, {Component} from "react"
import "./about.css"
import AboutCard from "./AboutCard"
import aboutData from "./aboutData"

class About extends Component{

    componentDidMount() {
        const li = document.getElementsByClassName("li")
       
        for(const i of li){
            if(i.innerText === ""){
                i.style.display = "none"
            }
        }
        }
     

    render(){
        return(
        <div className="wrapper">
            <div className="about-me">
                <div className="more-about">
                    <h1>MORE ABOUT ME</h1>
                    <p className="short-description">
                        Being a great Developer is one of my goals. I am very passionate about learning new technologies that would improve my development skills,
                        not only learning but also using them to build useful and well-designed web applications.
                    </p>
                    <div className="more-about-section">
                        {aboutData.map((items) => {
                            return (<AboutCard 
                            icon={items.icon} 
                            heading={items.heading} 
                            description={items.description} 
                            key={items.id}
                            list1={items.list1} 
                            list2={items.list2} 
                            list3={items.list3}
                            />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default About