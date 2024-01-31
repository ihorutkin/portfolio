import React, { useEffect, useRef } from "react";
import "../../styles/components/Layout/layout.css"

export default function Layout({children}){
    let location = document.location.pathname
    let refLayout = useRef(null)
    let refApps = useRef(null)
    let refGames = useRef(null)
    console.log(location)

    useEffect(() => {
        console.log("Value layout: ", refLayout.current.pathname)
        console.log("Value apps: ", refApps.current.pathname)
        console.log("Value games: ", refGames.current)
        if(refLayout.current.pathname === location){
            refLayout.current.classList.add("active")
        }
        else{
            refLayout.current.classList.remove("active")
        }
        if(refApps.current.pathname === location){
            refApps.current.classList.add("active")
        }
        else{
            refApps.current.classList.remove("active")
        }
        if(refGames.current.pathname === location){
            refGames.current.classList.add("active") 
        }
        else{
            refGames.current.classList.remove("active")
        }
    })

    return(
        <>
            <header className="layout_header">
                <nav>
                    <a href="/" className="link">Home</a>
                    <a href="/layout" ref={refLayout} className="link">Layout</a>
                    <a href="/game" ref={refGames} className="link">Game</a>
                    <a href="/app" ref={refApps} className="link">App</a>
                </nav>
            </header>
            { children }
            <footer className="footer_container">
                <section className="footer">
                    <article className="footer_inf">
                        <div className="footer_name">
                            <h2>IHOR</h2>
                            <h2>UTKIN</h2>
                        </div>
                        <div className="contact_inf">
                            <h2>CONTACT INFORMATION</h2>
                            <p>tel: <a href="tel:789-282-788">+48 789 282 788</a></p>
                            <p>email: <a href="mailto: igorutkin2002@gmail.com">igorutkin2002@gmail.com</a></p>
                        </div>
                        <nav className="footer_nav">
                            <a href="/" className="link">Home</a>
                            <a href="/layout" className="link">Layout</a>
                            <a href="/game" className="link">Game</a>
                            <a href="/app" className="link">App</a>
                        </nav>
                    </article>  
                    <div className="line"></div>
                    <article className="footer_social_media">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-github"></i>
                    </article>
                </section>
            </footer>
        </>
    )
}