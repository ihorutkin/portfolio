import React from "react";
import "../styles/components/about.css"

export default function About(){
    return(
        <section className="about-container">
            <div className="about">
                <article className="title_block">
                    <h2 className="title">About me</h2>
                    <h3>Descriptions</h3>
                    <div className="text">I am a young promising front-end developer with 2 years of commercial experience</div>
                </article>
                <article className="education_block">
                    <h3>Education</h3>
                    <div className="education">
                        <div className="university">
                            <p className="uniwersity_title">VASILKIV SPECIALIST COLLEGE OF NATIONAL AVIATION UNIVERSITY</p>
                            <p className="faculty"><span>Faculty: </span>Software development</p>
                            <p className="education_description">During my studies I worked with languages ​​such as C++ and C#, 
                            took an advanced course in higher mathematics, analysis 
                            mathematics, equations differential, algebra linear, mathematics 
                            discrete and theory probability</p>
                        </div>
                        <div className="university">
                            <p className="uniwersity_title">ANDRZEJ FRYCZ MODRZEWSKI KRAKOW UNIVERSITY</p>
                            <p className="faculty"><span>Faculty: </span>Cyber security</p>
                            <p className="education_description">During my studies I did so programming course in 
                            languages ​​such as php, C++ and Java, I learned to work with 
                            database using SQL and working with data statistics in R</p>
                        </div>
                    </div>
                </article>
                <article className="achievements">
                    <h3>My achievement</h3>
                    <div className="text">
                        I was among 30 winners out of 8,600 participants All-Ukrainian competition "Aviator" <a href="https://kolesnikovfund.org/ru/news/2010">(click here)</a>
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