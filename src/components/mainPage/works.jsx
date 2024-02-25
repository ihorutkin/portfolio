import React from "react";
import '../../styles/components/mainPage/works.css'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Works(){
    const {t, i18n} = useTranslation()
    return (
        <section className="work_container" id="projects">
            <div className="work">
                <h2 className="title">{t("main_page.projects.title")}</h2>
                <div className="text">{t("main_page.projects.text")}</div>
            </div>
            <div className="work_list">
                <article className="work_item">
                    <div className="work_img_block first" data-aos="fade-right" data-aos-delay="150"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title" data-aos="fade-left" data-aos-delay="100">{t("main_page.projects.project.type_1.title")}</h2>
                        <div className="work_item_text" data-aos="fade-left" data-aos-delay="150">{t("main_page.projects.project.type_1.text")}</div>
                        <Link to={"/layout"} className="work_item_link">
                            <a data-aos="fade-left" data-aos-delay="200">{t("main_page.projects.project.type_1.button")}<i style={{paddingLeft: '10px'}} className="fa-solid fa-arrow-right"></i></a>
                        </Link>
                    </div>
                </article>
                <article className="work_item">
                    <div className="work_content_block">
                        <h2 className="work_item_title" data-aos="fade-right" data-aos-delay="100">{t("main_page.projects.project.type_2.title")}</h2>
                        <div className="work_item_text" data-aos="fade-right" data-aos-delay="150">{t("main_page.projects.project.type_2.text")}</div>
                        <Link to={"/app"} className="work_item_link">
                            <a data-aos="fade-right" data-aos-delay="200">{t("main_page.projects.project.type_2.button")}<i style={{paddingLeft: '10px'}} className="fa-solid fa-arrow-right"></i></a>
                        </Link>
                    </div>
                    <div className="work_img_block second" data-aos="fade-left" data-aos-delay="150"></div>
                </article>
                <article className="work_item">
                    <div className="work_img_block third" data-aos="fade-right" data-aos-delay="150"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title" data-aos="fade-left" data-aos-delay="100">{t("main_page.projects.project.type_3.title")}</h2>
                        <div className="work_item_text" data-aos="fade-left" data-aos-delay="150">{t("main_page.projects.project.type_3.text")}</div>
                        <Link to={"/game"} className="work_item_link">
                            <a data-aos="fade-left" data-aos-delay="200">{t("main_page.projects.project.type_3.button")}<i style={{paddingLeft: '10px'}} className="fa-solid fa-arrow-right"></i></a>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    )
}