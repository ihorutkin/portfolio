import React, { useState } from "react";
import '../../styles/components/mainPage/contact.css'
import { useTranslation } from "react-i18next";

export default function Contact(){
    const {t, i18n} = useTranslation()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const url = new URL('/api', document.location.href)

        url.searchParams.set('name', name)
        url.searchParams.set('phone', surname)
        url.searchParams.set('email', email)
        url.searchParams.set('text', text)

        await fetch(url.toString(), {
            method: 'GET',
        })

        setName('')
        setSurname('')
        setEmail('')
        setText('')
    }
    return(
        <section className="contact_container" id="contact">
            <div className="contact">
                <h2 className="title">{t("main_page.contact.title")}</h2>
                <p className="text">{t("main_page.contact.text")}</p>
                <form className="contact_form" onSubmit={formSubmitHandler}>
                    <article className="contact_form_fields">
                        <div className="fields_container">
                            <input type="text" placeholder={t("main_page.contact.fields.name")} className="input_field" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="text" placeholder={t("main_page.contact.fields.surname")} className="input_field" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                            <input type="email" placeholder={t("main_page.contact.fields.email")} className="input_field" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder={t("main_page.contact.fields.subject")} className="input_field subject" value={text} onChange={(e) => setText(e.target.value)}/>
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