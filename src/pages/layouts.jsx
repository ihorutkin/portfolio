import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import Layout from "../components/Layout/layout";

import Burger from "../media/projects_img/Burger.png"
import Coffee from "../media/projects_img/Coffee.jpg"
import Computer from "../media/projects_img/Computer.jpg"
import Restaurant from "../media/projects_img/Restaurant.jpg"
import Sport from "../media/projects_img/Sport.webp"
import Travel from "../media/projects_img/Travel.jpg"
import { useTranslation } from "react-i18next";

export default function LayoutPage(){
    const {t, i18n} = useTranslation()
    let layouts = [
        {
            id: 1, 
            name: `${t("layout_page.project_names.project_1")}`, 
            img: Burger, 
            demo: "https://ihorutkin.github.io/Burger/",
            github: "https://github.com/ihorutkin/Burger",
            description: `${t("layout_page.project_description.project_1")}`
        },
        {
            id: 2, 
            name: `${t("layout_page.project_names.project_2")}`, 
            img: Coffee, 
            demo: "https://ihorutkin.github.io/Coffee/",
            github: "https://github.com/ihorutkin/Coffee",
            description: `${t("layout_page.project_description.project_2")}`
        },
        {
            id: 3, 
            name: `${t("layout_page.project_names.project_3")}`, 
            img: Computer, 
            demo: "https://ihorutkin.github.io/Computer/",
            github: "https://github.com/ihorutkin/Computer",
            description: `${t("layout_page.project_description.project_3")}`
        },
        {
            id: 4, 
            name: `${t("layout_page.project_names.project_4")}`, 
            img: Sport, 
            demo: "https://ihorutkin.github.io/Sport/",
            github: "https://github.com/ihorutkin/Sport",
            description: `${t("layout_page.project_description.project_4")}`
        },
        {
            id: 5, 
            name: `${t("layout_page.project_names.project_5")}`, 
            img: Travel, 
            demo: "https://ihorutkin.github.io/travel/",
            github: "https://github.com/ihorutkin/travel",
            description: `${t("layout_page.project_description.project_5")}`
        },
        {
            id: 6, 
            name: `${t("layout_page.project_names.project_6")}`, 
            img: Restaurant, 
            demo: "https://ihorutkin.github.io/Restaurant/",
            github: "https://github.com/ihorutkin/Restaurant",
            description: `${t("layout_page.project_description.project_6")}`
        },
    ]

    return(
        <section className="layout_container">
            <Layout>
            <div className="layout">
                {
                    layouts.map(elem => 
                        <LayoutBlock 
                            key={elem.id} 
                            project_name={elem.name} 
                            project_img={elem.img} 
                            project_demo={elem.demo}  
                            project_github={elem.github}
                            project_desc={elem.description}
                        />
                    )
                }
            </div>
            </Layout>
        </section>
    )
}