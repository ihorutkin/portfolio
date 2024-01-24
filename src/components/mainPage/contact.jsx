import React from "react";
import '../../styles/components/contact.css'

export default function Contact(){
    return(
        <section className="contact_container" id="contact">
            <div className="contact">
                <h2 className="title">Contact</h2>
                <p className="text">Let's be in contact</p>
                <form className="contact_form">
                    <input type="text" placeholder="Name" className="input_field"/>
                    <input type="text" placeholder="Surname" className="input_field"/>
                    <input type="email" placeholder="Email" className="input_field"/>
                    <input type="text" placeholder="Subject" className="input_field subject"/>
                    <textarea className="text_field" placeholder="Your message ..."></textarea>
                </form>
            </div>
        </section>
    )
}