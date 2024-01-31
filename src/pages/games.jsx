import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import Game_2048 from "../media/game.jpg"
import Layout from "../components/Layout/layout";

export default function Games(){
    let layouts = [
        {
            id: 1,
            name: "2048",
            img: Game_2048,
            demo: "https://ihorutkin.github.io/2048-demo/",
            github: "https://github.com/ihorutkin/2048-demo",
            description: "This is 2048 game writted on native js. You have to press arrow down, up, left and right to replace the numbers"
        },
        {
            id: 2,
            name: "tic tac",
            img: Game_2048,
            demo: "https://ihorutkin.github.io/2048-demo/",
            github: "https://github.com/ihorutkin/tic-tac-demo",
            description: "This is tic tac game writted on react.js. To win you have to put three X or three O in a row, also you can change day and night mode"
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