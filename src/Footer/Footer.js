import "./footer.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                        <span>
                            <a href="mailto:Godsfirstbriggs@gmail.com">Godsfirstbriggs@gmail.com</a>
                        </span>
                    </div>

                    <div className="contactMe__social">
                        <a href="https://www.linkedin.com/in/taminoturoko-briggs-b98251203/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon/>
                        </a>
                    </div>                    
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer