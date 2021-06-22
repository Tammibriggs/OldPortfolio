import React from "react"
import "./email.css"
import emailIcon from "../images/email-icon.svg"

function Email(){
    return(
        <div class="send-email">
            <div class="email-heading mail">
                <img src={emailIcon} class="email-icon"/>
                <h2>drop an email</h2>
            </div>

            <div class="email-feilds mail">
                <form action="#" method="POST" data-netlify="true" name="Portfolio_contact_form">
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Your email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send email</button>
                </form>  
            </div>
        </div>
    )
}

export default Email