import React from "react";
import "../styles/topics/header.css"

export default function Headers(){
    return (
        <header className="header">
            <nav className="navigation">
                <a href="#about" className="link">about</a>   
                <a href="#service" className="link">service</a>
                <a href="#skills" className="link">skills</a>
                <a href="#projects" className="link">projects</a>
                <a href="#contact" className="link">contact</a>
            </nav>
        </header>
    )
}