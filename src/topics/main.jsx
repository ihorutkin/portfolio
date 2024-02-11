import React from "react";
import "../styles/topics/main.css"
import video from "../media/video.mp4"
import { useTranslation } from "react-i18next";

export default function Main(){
    const {t, i18n} = useTranslation()
    return  (
        <section className="main-container">
            <video src={video} loop autoPlay muted></video>
            <article className="text-container">
                <h2 className="title-name"> 
                    {t("main_page.greetings")} 
                </h2>
                <h2 className="title-frontend">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quos nobis possimus earum excepturi perspiciatis consectetur, voluptas animi porro minima.
                </h2>
            </article>
            <div className="see-more-btn">
                <i className="fa-solid fa-arrow-down main-btn"></i>
            </div>
        </section>
    )
}