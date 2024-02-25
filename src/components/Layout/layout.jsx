import React, { useEffect, useRef } from "react";
import "../../styles/components/Layout/layout.css"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Layout({children}){
    const {t, i18n} = useTranslation()
    let location = document.location.pathname
    let refLayout = useRef(null)
    let refApps = useRef(null)
    let refGames = useRef(null)
    console.log(location)

    // useEffect(() => {
    //     console.log("Value layout: ", refLayout.current.pathname)
    //     console.log("Value apps: ", refApps.current.pathname)
    //     console.log("Value games: ", refGames.current)
    //     if(refLayout.current.pathname === location){
    //         refLayout.current.classList.add("active")
    //     }
    //     else{
    //         refLayout.current.classList.remove("active")
    //     }
    //     if(refApps.current.pathname === location){
    //         refApps.current.classList.add("active")
    //     }
    //     else{
    //         refApps.current.classList.remove("active")
    //     }
    //     if(refGames.current.pathname === location){
    //         refGames.current.classList.add("active") 
    //     }
    //     else{
    //         refGames.current.classList.remove("active")
    //     }
    // })

    return(
        <>
            <header className="layout_header">
                <nav>
                    <Link to={"/"} className="link"><a>{t("projects_links.home")}</a></Link>
                    <Link to={"/layout"} className="link"><a>{t("projects_links.layout")}</a></Link>
                    <Link to={"/game"} className="link"><a>{t("projects_links.game")}</a></Link>
                    <Link to={"/app"} className="link"><a>{t("projects_links.app")}</a></Link>
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
                            <Link to={"/"} className="link"><a>{t("projects_links.home")}</a></Link>
                            <Link to={"/layout"} className="link"><a>{t("projects_links.layout")}</a></Link>
                            <Link to={"/game"} className="link"><a>{t("projects_links.game")}</a></Link>
                            <Link to={"/app"} className="link"><a>{t("projects_links.app")}</a></Link>
                        </nav>
                    </article>
                    <div className="line"></div>
                    <article className="footer_social_media">
                        <a href="https://www.linkedin.com/in/ihor-utkin/">
                            <i className="fa-brands fa-linkedin item"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100042482872993">
                            <i className="fa-brands fa-facebook item"></i>
                        </a>
                        <a href="https://github.com/ihorutkin">
                            <i className="fa-brands fa-github item"></i>
                        </a>
                    </article>
                </section>
            </footer>
        </>
    )
}