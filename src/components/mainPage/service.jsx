import React from "react";
import "../../styles/components/mainPage/service.css"
// import photo1 from "../media/work1.jpg"

export default function Work(){
    return (
        <section className="service_container" id="service">
            <div className="service">
            <h2 className="service_title">What can I do</h2>
            <div className="service_text">Short list of my proffessional skills</div>
            <div className="services">
                <article className="service_item">
                    <i className="fa-solid fa-code"></i>
                    <div className="service_box">
                        <p className="item_title">Responsive websites</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
                <article className="service_item">
                    <i className="fa-brands fa-sass"></i>
                    <div className="service_box">
                        <p className="item_title">Adaptive websites</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
                <article className="service_item">
                    <i className="fa-brands fa-react"></i>
                    <div className="service_box">
                        <p className="item_title">PWA</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
                <article className="service_item">
                    <i className="fa-brands fa-node-js"></i>
                    <div className="service_box">
                        <p className="item_title">Backend</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
                <article className="service_item">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    <div className="service_box">
                        <p className="item_title">DevOps</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
                <article className="service_item">
                    <i className="fa-solid fa-microscope"></i>
                    <div className="service_box">
                        <p className="item_title">Testing</p>
                        <p className="item_description">I can create responsible websites</p>
                    </div>
                </article>
            </div>
            </div>
        </section>
    )
}