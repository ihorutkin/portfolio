import React from "react";
import Skill from "../../topics/skill";
import '../../styles/components/mainPage/listOfSkills.css'
import { useTranslation } from "react-i18next";

export default function ListOfSkills(){
    const {t, i18n} = useTranslation()
    let skills = ['JavaScript', 'Node.js', 'React', 'Next.js', 'Redux', 'TypeScript', 'Chart.js', 'i18n', 'Tailwind', 'HTML', 'CSS', 'SCSS', 'LESS', 'SASS', 'Bootstrap', 'Linux', 'Docker', 'CI/CD', 'SQL', 'Rest API', 'Webpack', 'Git', 'unit testing', 'Statistics']
    return(
        <section className="list_container" id="skills">
            <div className="list_of_skills">
                <h2 className="title">{t("main_page.skills.title")}</h2>
                <div className="text">{t("main_page.skills.text")}</div>
                <article className="skills">
                    {
                        skills.map(elem => {
                            return <Skill name={elem} />
                        })
                    }
                </article>
            </div>
        </section>
    )
}