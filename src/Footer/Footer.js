import "./footer.css"
import twitterIcon from "../images/twitter.svg"

function Footer(){
    return(
        <footer>
            <div className="wrapper">
                <div className="contactMe">
                    <h2 id="contact">Contact me</h2>
                    <div className="contactMe__phoneline">
                        <span>+2347032500342</span>
                    </div>
                    
                    <div className="contactMe__email">
                        <span><a href="mailto:Godsfirstbriggs@gmail.com">Godsfirstbriggs@gmail.com</a></span>
                    </div>

                     <div className="contactMe__social">
                        <a href="https://twitter.com/Tammibr25891504" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitter icon"/></a>
                    </div>                    
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer