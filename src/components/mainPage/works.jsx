import React from "react";
import '../../styles/components/mainPage/works.css'
import { useTranslation } from "react-i18next";

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
                    <div className="work_img_block first"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title">{t("main_page.projects.project.type_1.title")}</h2>
                        <div className="work_item_text">{t("main_page.projects.project.type_1.text")}</div>
                        <a href="/layout" className="work_item_link">{t("main_page.projects.project.type_1.button")}<i style={{paddingLeft: '10px'}} class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
                <article className="work_item">
                    <div className="work_content_block">
                        <h2 className="work_item_title">{t("main_page.projects.project.type_2.title")}</h2>
                        <div className="work_item_text">{t("main_page.projects.project.type_2.text")}</div>
                        <a href="/app" className="work_item_link">{t("main_page.projects.project.type_2.button")}<i style={{paddingLeft: '10px'}} class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="work_img_block second"></div>
                </article>
                <article className="work_item">
                    <div className="work_img_block third"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title">{t("main_page.projects.project.type_3.title")}</h2>
                        <div className="work_item_text">{t("main_page.projects.project.type_3.text")}</div>
                        <a href="/game" className="work_item_link">{t("main_page.projects.project.type_3.button")}<i style={{paddingLeft: '10px'}} class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>
        </section>
    )
}