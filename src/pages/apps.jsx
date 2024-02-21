import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import App_Color from "../media/app.jpg"
import App_Chart from "../media/Chart.jpg"
import App_Weather from "../media/wheather.jpg"
import Layout from "../components/Layout/layout";
import { useTranslation } from "react-i18next";

export default function Apps(){
    const {t, i18n} = useTranslation()
    let layouts = [
        {
            id: 1,
            name: `${t("app_page.project_names.project_1")}`,
            img: App_Color,
            demo: "https://ihorutkin.github.io/color-app-demo/",
            github: "https://github.com/ihorutkin/color-app-demo",
            description: `${t("app_page.project_description.project_1")}`
        },
        {
            id: 2,
            name: `${t("app_page.project_names.project_2")}`,
            img: App_Weather,
            demo: "https://ihorutkin.github.io/weather-demo/",
            github: "https://github.com/ihorutkin/WeatherApp",
            description: `${t("app_page.project_description.project_2")}`
        },
        {
            id: 3,
            name: `${t("app_page.project_names.project_3")}`,
            img: App_Chart,
            demo: "https://ihorutkin.github.io/chart-app-demo/",
            github: "https://github.com/ihorutkin/chart-app-demo",
            description: `${t("app_page.project_description.project_3")}`
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