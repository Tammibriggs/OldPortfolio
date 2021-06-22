import React from "react"
import './App.css'
import Header from "./Header/Header"
import Intro from "./Intro/Intro"
import About from "./About/About"
import Works from "./Works/Works"
import Email from "./Email/Email"
import Footer from "./Footer/Footer"

function App() {
    return(
      <div>
        <Header/>
        <Intro/>
        <About/>
        <Works/>
        <Email/>
        
      </div>
    ) 
}

export default App;
