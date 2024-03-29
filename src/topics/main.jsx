import React from "react";
import "../styles/topics/main.css"
import video from "../media/video.mp4"
import { useTranslation } from "react-i18next";
import file from "../file/CV_IHOR_UTKIN.pdf"

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
                    {t("main_page.short_description")}
                </h2>
            </article>
            <div className="see-more-btn">
                <a href={file} download>
                    <i className="fa-solid fa-arrow-down main-btn"></i>
                </a>
            </div>
            {/* <p className="download_cv">Download CV</p> */}
        </section>
    )
}