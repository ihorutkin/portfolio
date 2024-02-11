import React from "react";
import '../../styles/components/mainPage/contact.css'
import { useTranslation } from "react-i18next";

export default function Contact(){
    const {t, i18n} = useTranslation()
    return(
        <section className="contact_container" id="contact">
            <div className="contact">
                <h2 className="title">{t("main_page.contact.title")}</h2>
                <p className="text">{t("main_page.contact.text")}</p>
                <form className="contact_form">
                    <article className="contact_form_fields">
                        <div className="fields_container">
                            <input type="text" placeholder={t("main_page.contact.fields.name")} className="input_field"/>
                            <input type="text" placeholder={t("main_page.contact.fields.surname")} className="input_field"/>
                            <input type="email" placeholder={t("main_page.contact.fields.email")} className="input_field"/>
                            <input type="text" placeholder={t("main_page.contact.fields.subject")} className="input_field subject"/>
                        </div>
                        <div className="btn_container">
                            <button type="text" className="contact_btn">{t("main_page.contact.fields.button")}</button>
                        </div>
                    </article>
                    <article className="contact_form_text">
                        <textarea className="text_field" placeholder={t("main_page.contact.fields.text")}></textarea>
                    </article>
                </form>
            </div>
        </section>
    )
}