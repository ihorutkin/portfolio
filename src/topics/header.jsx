import React from "react";
import "../styles/topics/header.css"
import { useTranslation } from "react-i18next";

export default function Headers(){
    const {t, i18n} = useTranslation()
    return (
        <header className="header">
            <nav className="navigation">
                <a href="#about" className="link">{t("main_page.navigation.about")}</a>   
                <a href="#service" className="link">{t("main_page.navigation.service")}</a>
                <a href="#skills" className="link">{t("main_page.navigation.skills")}</a>
                <a href="#projects" className="link">{t("main_page.navigation.projects")}</a>
                <a href="#contact" className="link">{t("main_page.navigation.contact")}</a>
            </nav>
        </header>
    )
}