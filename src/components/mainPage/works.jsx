import React from "react";
import '../../styles/components/mainPage/works.css'

export default function Works(){
    return (
        <section className="work_container" id="projects">
            <div className="work">
                <h2 className="title">My projects</h2>
                <div className="text">This is list of my personal projects</div>
            </div>
            <div className="work_list">
                <article className="work_item">
                    <div className="work_img_block first"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title">Layouts</h2>
                        <div className="work_item_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                                                        id porro animi praesentium tenetur. Dolor deleniti nihil labore earum! Fugiat.</div>
                        <a href="/layout" className="work_item_link">{'Go to the projects '}<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
                <article className="work_item">
                    <div className="work_content_block">
                        <h2 className="work_item_title">Apps</h2>
                        <div className="work_item_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                                                        id porro animi praesentium tenetur. Dolor deleniti nihil labore earum! Fugiat.</div>
                        <a href="/app" className="work_item_link">{'Go to the projects '}<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="work_img_block second"></div>
                </article>
                <article className="work_item">
                    <div className="work_img_block third"></div>
                    <div className="work_content_block">
                        <h2 className="work_item_title">Games</h2>
                        <div className="work_item_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                                                        id porro animi praesentium tenetur. Dolor deleniti nihil labore earum! Fugiat.</div>
                        <a href="/game" className="work_item_link">{'Go to the projects '}<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>
        </section>
    )
}