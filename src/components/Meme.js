import React from "react"
export default function Meme(){
    return(
        <main>
<form className="form">
    <input type="text" className="form--input" placeholder="Top Text"/>
    <input type="text" className="form--input" placeholder="Bottom Text"/>
    <button>Get a meme image</button>
</form>
        </main>
    )
}