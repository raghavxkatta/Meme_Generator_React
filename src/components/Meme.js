import React from "react"
import memesData from "../memesData"
export default function Memes() {
    let url;
    function getMemeImage(){
const memesArray=memesData.data.memes
const randomNum=Math.floor(Math.random()*memesArray.length)
console.log(randomNum)
const url = memesArray[randomNum].url
console.log(url)
    }
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <div>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="Top Text"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="Bottom Text"
                    /></div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>


        </main>
    )
}

