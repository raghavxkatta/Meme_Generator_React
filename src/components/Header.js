import React from "react"
import logoFace from "../assets/Troll Face.png"
export default function Header(){
    return(
        <header className="Nav_container">
<img className="Logo" src={logoFace} alt="logo"></img><h1 className="Logo_Text">Meme Generator</h1>
<h4 className="Nav_right">React Course-Project 3</h4>
        </header>
    )
}