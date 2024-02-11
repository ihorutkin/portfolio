import React from "react";
import "../../styles/components/mainPage/about.css"
import { useTranslation } from "react-i18next";

export default function About(){
    const {t, i18n} = useTranslation()
    return(
        <section className="about-container" id="about">
            <div className="about">
                <article className="title_block">
                    <h2 className="title">{t("main_page.about.title")}</h2>
                    <h3>{t("main_page.about.descriptions.descriptions_title")}</h3>
                    <div className="text">{t("main_page.about.descriptions.descriptions_text")}</div>
                </article>
                <article className="education_block">
                    <h3>{t("main_page.about.education.education_title")}</h3>
                    <div className="education">
                        <div className="university">
                            <p className="uniwersity_title">{t("main_page.about.education.education_item_1.title")}</p>
                            <p className="faculty"><span>{t("main_page.about.education.education_item_1.faculty")}</span>{t("main_page.about.education.education_item_1.faculty_text")}</p>
                            <p className="education_description">{t("main_page.about.education.education_item_1.text")}</p>
                        </div>
                        <div className="university">
                            <p className="uniwersity_title">{t("main_page.about.education.education_item_2.title")}</p>
                            <p className="faculty"><span>{t("main_page.about.education.education_item_2.faculty")}</span>{t("main_page.about.education.education_item_2.faculty_text")}</p>
                            <p className="education_description">{t("main_page.about.education.education_item_2.text")}</p>
                        </div>
                    </div>
                </article>
                <article className="achievements">
                    <h3>{t("main_page.about.achievement.title")}</h3>
                    <div className="text">
                    {t("main_page.about.achievement.text")}<a href="https://kolesnikovfund.org/ru/news/2010">(click here)</a>
                    </div>
                </article>
                <article></article>
            </div>
        </section>
    )
}










// eslint-disable-next-line no-lone-blocks
{/* <article className="about">
                <div className="about-item one">
                    <h2>Title 1</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="about-item two">
                    <h2>Title 2</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="about-item three">
                    <h2>Title 3</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="about-item four">
                    <h2>Title 4</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </article> */}