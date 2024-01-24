import React from "react";
import "../styles/topics/footer.css"

export default function Footer(){
    return(
        <footer className="footer_container">
            <section className="footer">
                <article className="footer_inf">
                    <div className="footer_name">
                        <h2>IHOR</h2>
                        <h2>UTKIN</h2>
                    </div>
                    <div className="contact_inf">
                        <h2>CONTACT INFORMATION</h2>
                        <p>tel: <a href="tel:789-282-788">+48 789 282 788</a></p>
                        <p>email: <a href="mailto: igorutkin2002@gmail.com">igorutkin2002@gmail.com</a></p>
                    </div>
                    <nav className="footer_nav">
                        <a href="#about" className="link">about</a>   
                        <a href="#service" className="link">service</a>
                        <a href="#skills" className="link">skills</a>
                        <a href="#projects" className="link">projects</a>
                        <a href="#contact" className="link">contact</a>
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