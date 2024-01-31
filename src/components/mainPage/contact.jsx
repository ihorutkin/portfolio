import React from "react";
import '../../styles/components/mainPage/contact.css'

export default function Contact(){
    return(
        <section className="contact_container" id="contact">
            <div className="contact">
                <h2 className="title">Contact</h2>
                <p className="text">Let's be in contact</p>
                <form className="contact_form">
                    <article className="contact_form_fields">
                        <div className="fields_container">
                            <input type="text" placeholder="Name" className="input_field"/>
                            <input type="text" placeholder="Surname" className="input_field"/>
                            <input type="email" placeholder="Email" className="input_field"/>
                            <input type="text" placeholder="Subject" className="input_field subject"/>
                        </div>
                        <div className="btn_container">
                            <button type="text" className="contact_btn">Send</button>
                        </div>
                    </article>
                    <article className="contact_form_text">
                        <textarea className="text_field" placeholder="Your message ..."></textarea>
                    </article>
                </form>
            </div>
        </section>
    )
}