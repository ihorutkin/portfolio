import React, { useState } from "react";
import '../../styles/components/mainPage/contact.css'
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Contact(){
    const {t, i18n} = useTranslation()

    const TOKEN = "6388546560:AAE_75bisozQS_4UhPm11eyQcdyugUXG3YM"
    const CHAT_ID = "-1001954887431"
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        let message = `<b>Request from site</b>\n`
        message += `<b>Name: </b>${name}\n`
        message += `<b>Surname: </b>${surname}\n`
        message += `<b>Email: </b>${email}\n`
        message += `<b>Subject: </b>${subject}\n`
        message += `<b>Text: </b>${text}\n`

        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            alert('Message has been sent')
            setName('')
            setSurname('')
            setEmail('')
            setSubject('')
            setText('')
        })
        .catch(err => {
            throw(err.message)
        })
    }

    return(
        <section className="contact_container" id="contact">
            <div className="contact">
                <h2 className="title" data-aos="fade-right" data-aos-delay="100">{t("main_page.contact.title")}</h2>
                <p className="text" data-aos="fade-right" data-aos-delay="150">{t("main_page.contact.text")}</p>
                <form onSubmit={handleSubmit} className="contact_form" id="tg">
                    <article className="contact_form_fields" data-aos="fade-right" data-aos-delay="150">
                        <div className="fields_container">
                            <input 
                                type="text" 
                                placeholder={t("main_page.contact.fields.name")} 
                                className="input_field" 
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <input 
                                type="text" 
                                placeholder={t("main_page.contact.fields.surname")} 
                                className="input_field" 
                                name="surname"
                                value={surname}
                                onChange={(event) => setSurname(event.target.value)}
                                required
                            />
                            <input 
                                type="email" 
                                placeholder={t("main_page.contact.fields.email")} 
                                className="input_field" 
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <input 
                                type="text" 
                                placeholder={t("main_page.contact.fields.subject")} 
                                className="input_field subject" 
                                name="subject"
                                value={subject}
                                onChange={(event) => setSubject(event.target.value)}
                                required
                            />
                        </div>
                        <div className="btn_container">
                            <button type="submit" className="contact_btn">{t("main_page.contact.fields.button")}</button>
                        </div>
                    </article>
                    <article className="contact_form_text" data-aos="fade-left" data-aos-delay="150">
                        <textarea 
                            className="text_field" 
                            placeholder={t("main_page.contact.fields.text")} 
                            name="text"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        ></textarea>
                    </article>
                </form>
            </div>
        </section>
    )
}