import React from "react"
import './App.css'
import Header from "./Header/Header"
import Intro from "./Intro/Intro"
import About from "./About/About"
import Works from "./Works/Works"


function App() {
    return(
      <div>
        <Header/>
        <Intro/>
        <About/>
        <Works/>
      </div>
    ) 
}

export default App;
