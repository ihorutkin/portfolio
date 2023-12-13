import React from "react";
import "../styles/topics/social-media.css"

export default function Aside(){
    return (
        <aside className="aside">
            <div className="social-media">
                <i className="fa-brands fa-instagram item"></i>
                <i className="fa-brands fa-facebook item"></i> 
                <i className="fa-brands fa-github item"></i>
            </div>
        </aside>
    )
}