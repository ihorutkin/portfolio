import React, { useState } from "react";
import "../styles/topics/header.css"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Headers(){
    const {t, i18n} = useTranslation()
    const [modal, setModal] = useState(false)

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    // const toggleModal = (event) => {
    //     setModal(!modal)
    //     event.target.classList.toggle("fa-xmark")
    // }
    return (
        <header className="header">
            {modal && (
                <article className="modal_menu">
                    <nav className="modal_list">
                        <a href="#about" className="modal_link">{t("main_page.navigation.about")}</a>   
                        <a href="#service" className="modal_link">{t("main_page.navigation.service")}</a>
                        <a href="#skills" className="modal_link">{t("main_page.navigation.skills")}</a>
                        <a href="#projects" className="modal_link">{t("main_page.navigation.projects")}</a>
                        <a href="#contact" className="modal_link">{t("main_page.navigation.contact")}</a>
                    </nav>
                </article>
            )}
            <nav className="navigation">
                <Link to="#about" className="link" onClick={() => scrollToSection('about')}>{t("main_page.navigation.about")}</Link>
                <Link to="#service" className="link" onClick={() => scrollToSection('service')}>{t("main_page.navigation.service")}</Link>
                <Link to="#skills" className="link" onClick={() => scrollToSection('skills')}>{t("main_page.navigation.skills")}</Link>
                <Link to="#projects" className="link" onClick={() => scrollToSection('projects')}>{t("main_page.navigation.projects")}</Link>
                <Link to="#contact" className="link" onClick={() => scrollToSection('contact')}>{t("main_page.navigation.contact")}</Link>
                {/* <a href="#about" className="link" onClick={() => scrollToSection('about')}>{t("main_page.navigation.about")}</a>    */}
                {/* <a href="#service" className="link" onClick={() => scrollToSection('service')}>{t("main_page.navigation.service")}</a>
                <a href="#skills" className="link" onClick={() => scrollToSection('skills')}>{t("main_page.navigation.skills")}</a>
                <a href="#projects" className="link" onClick={() => scrollToSection('projects')}>{t("main_page.navigation.projects")}</a>
                <a href="#contact" className="link" onClick={() => scrollToSection('contact')}>{t("main_page.navigation.contact")}</a> */}
            </nav>
            <i className="fa-solid fa-bars" onClick={(event) => {
                event.target.classList.toggle("fa-xmark")
                setModal(!modal)
            }}></i>
        </header>
    )
}