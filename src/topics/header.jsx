import React, { useState } from "react";
import "../styles/topics/header.css"
import { useTranslation } from "react-i18next";

export default function Headers(){
    const {t, i18n} = useTranslation()
    const [modal, setModal] = useState(false)

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
                <a href="#about" className="link">{t("main_page.navigation.about")}</a>   
                <a href="#service" className="link">{t("main_page.navigation.service")}</a>
                <a href="#skills" className="link">{t("main_page.navigation.skills")}</a>
                <a href="#projects" className="link">{t("main_page.navigation.projects")}</a>
                <a href="#contact" className="link">{t("main_page.navigation.contact")}</a>
            </nav>
            <i class="fa-solid fa-bars" onClick={(event) => {
                event.target.classList.toggle("fa-xmark")
                setModal(!modal)
            }}></i>
            {/* <i class="fa-solid fa-xmark"></i> */}
        </header>
    )
}