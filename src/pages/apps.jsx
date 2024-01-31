import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import App_Color from "../media/app.jpg"
import App_Chart from "../media/Chart.jpg"
import Layout from "../components/Layout/layout";

export default function Apps(){
    let layouts = [
        {
            id: 1,
            name: "Colors",
            img: App_Color,
            demo: "https://ihorutkin.github.io/color-app-demo/",
            github: "https://github.com/ihorutkin/color-app-demo",
            description: "This is color app. You can choose you personal palette of colors, save it and share with your friends, For upfating colors you have to press tab, for saving color you should to click on lock"
        },
        {
            id: 2,
            name: "Weather",
            img: App_Color,
            demo: "https://ihorutkin.github.io/color-app-demo/",
            github: "https://github.com/ihorutkin/WeatherApp",
            description: "This is weather app. You have to write your city and click the button"
        },
        {
            id: 3,
            name: "Chart",
            img: App_Chart,
            demo: "https://ihorutkin.github.io/chart-app-demo/",
            github: "https://github.com/ihorutkin/chart-app-demo",
            description: "This is an example of animated chart"
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