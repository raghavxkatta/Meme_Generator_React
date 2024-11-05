import React from "react"
export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            className="form--input"
                            placeholder="Top Text"
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            className="form--input"
                            placeholder="Bottom Text"
                        /></label></div>
                <button className="form--button">Get a meme image</button>
            </form>
        </main>
    )
}