import React, { useEffect, useRef } from "react";
import "../../styles/components/Layout/layout.css"
import { useTranslation } from "react-i18next";

export default function Layout({children}){
    const {t, i18n} = useTranslation()
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
                    <a href="/" className="link">{t("projects_links.home")}</a>
                    <a href="/layout" ref={refLayout} className="link">{t("projects_links.layout")}</a>
                    <a href="/game" ref={refGames} className="link">{t("projects_links.game")}</a>
                    <a href="/app" ref={refApps} className="link">{t("projects_links.app")}</a>
                </nav>
            </header>
            { children }
            <footer className="footer_container">
                <section className="footer">
                    <article className="footer_inf">
                        <div className="footer_name">
                            <h2>{t("main_page.footer.title_name")}</h2>
                            <h2>{t("main_page.footer.title_surname")}</h2>
                        </div>
                        <div className="contact_inf">
                            <h2>{t("main_page.footer.contact_info.title")}</h2>
                            <p>{t("main_page.footer.contact_info.tel")} <a href="tel:789-282-788">+48 789 282 788</a></p>
                            <p>{t("main_page.footer.contact_info.email")} <a href="mailto: igorutkin2002@gmail.com">igorutkin2002@gmail.com</a></p>
                        </div>
                        <nav className="footer_nav">
                            <a href="/" className="link">{t("projects_links.home")}</a>
                            <a href="/layout" className="link">{t("projects_links.layout")}</a>
                            <a href="/game" className="link">{t("projects_links.game")}</a>
                            <a href="/app" className="link">{t("projects_links.app")}</a>
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