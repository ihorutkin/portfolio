import React from "react";
import Skill from "../../topics/skill";
import '../../styles/components/listOfSkills.css'

export default function ListOfSkills(){
    let skills = ['JavaScript', 'Node.js', 'React', 'Next.js', 'Redux', 'TypeScript', 'Chart.js', 'i18n', 'Tailwind', 'HTML', 'CSS', 'SCSS', 'LESS', 'SASS', 'Bootstrap', 'Linux', 'Docker', 'CI/CD', 'SQL', 'Rest API', 'Webpack', 'Git', 'unit testing', 'Statistics']
    return(
        <section className="list_container" id="skills">
            <div className="list_of_skills">
                <h2 className="title">List of skills</h2>
                <div className="text">This is list of my skills</div>
                <article className="skills">
                    {
                        skills.map(elem => {
                            console.log(elem)
                            return <Skill name={elem} />
                        })
                    }
                </article>
            </div>
        </section>
    )
}