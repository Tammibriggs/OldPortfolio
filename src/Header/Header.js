import React from 'react'
import "./header.css"

function Header(){

    return(
        <header>
            <div className="wrapper">
               <div className="navigation">
                    <a href="#contact"><button>Contact</button></a>
                </div>
            </div>
        </header>
    )
}

export default Header