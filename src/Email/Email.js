import React from "react"
import "./email.css"
import emailIcon from "../images/email-icon.svg"

function Email(){
    return(
        <div className="wrapper">
            <div className="send-email">
                <div className="email-heading mail">
                    <img src={emailIcon} className="email-icon" alt="email icon"/>
                    <h2>drop an email</h2>
                </div>

                <div className="email-feilds mail">
                    <form action="#" method="POST" data-netlify="true" name="Portfolio_contact_form">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Your email" name="email"/>
                        <textarea placeholder="Message" name="message"></textarea>
                        <button type="submit">Send email</button>
                    </form>  
                </div>
            </div>
        </div>
    )
}

export default Email