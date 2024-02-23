import React from "react";
import "../../styles/components/mainPage/service.css"
import { useTranslation } from "react-i18next";
// import photo1 from "../media/work1.jpg"

export default function Work(){
    const {t, i18n} = useTranslation()
    return (
        <section className="service_container" id="service">
            <div className="service">
            <h2 className="service_title" data-aos="fade-right" data-aos-delay="50">{t("main_page.service.title")}</h2>
            <div className="service_text" data-aos="fade-right" data-aos-delay="100">{t("main_page.service.text")}</div>
            <div className="services">
                <article className="service_item" data-aos="fade-right" data-aos-delay="50">
                    <i className="fa-solid fa-code"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_1.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
                <article className="service_item" data-aos="fade-right" data-aos-delay="100">
                    <i className="fa-brands fa-sass"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_2.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
                <article className="service_item" data-aos="fade-right" data-aos-delay="150">
                    <i className="fa-brands fa-react"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_3.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
                <article className="service_item" data-aos="fade-right" data-aos-delay="50">
                    <i className="fa-brands fa-node-js"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_4.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
                <article className="service_item" data-aos="fade-right" data-aos-delay="100">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_5.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
                <article className="service_item" data-aos="fade-right" data-aos-delay="150">
                    <i className="fa-solid fa-microscope"></i>
                    <div className="service_box">
                        <p className="item_title">{t("main_page.service.services.service_item_6.title")}</p>
                        <p className="item_description">{t("main_page.service.services.service_item_1.text")}</p>
                    </div>
                </article>
            </div>
            </div>
        </section>
    )
}