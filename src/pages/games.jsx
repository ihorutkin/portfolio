import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import Game_2048 from "../media/game.jpg"
import Layout from "../components/Layout/layout";
import { useTranslation } from "react-i18next";

export default function Games(){
    const {t, i18n} =  useTranslation()
    let layouts = [
        {
            id: 1,
            name: `${t("game_page.project_names.project_1")}`,
            img: Game_2048,
            demo: "https://ihorutkin.github.io/2048-demo/",
            github: "https://github.com/ihorutkin/2048-demo",
            description: `${t("game_page.project_description.project_1")}`
        },
        {
            id: 2,
            name: `${t("game_page.project_names.project_2")}`,
            img: Game_2048,
            demo: "https://ihorutkin.github.io/2048-demo/",
            github: "https://github.com/ihorutkin/tic-tac-demo",
            description: `${t("game_page.project_description.project_2")}`
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