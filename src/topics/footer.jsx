import React from "react";
import "../styles/topics/footer.css"
import { useTranslation } from "react-i18next";

export default function Footer(){
    const {t, i18n} = useTranslation()
    return(
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
                        <a href="#about" className="link">{t("main_page.navigation.about")}</a>   
                        <a href="#service" className="link">{t("main_page.navigation.service")}</a>
                        <a href="#skills" className="link">{t("main_page.navigation.skills")}</a>
                        <a href="#projects" className="link">{t("main_page.navigation.projects")}</a>
                        <a href="#contact" className="link">{t("main_page.navigation.contact")}</a>
                    </nav>
                </article>
                <div className="line"></div>
                <article className="footer_social_media">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                </article>
            </section>
        </footer>
    )
}