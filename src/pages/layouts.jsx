import React from "react";
import LayoutBlock from "../topics/layoutBlock";
import Layout from "../components/Layout/layout";

import Burger from "../media/projects_img/Burger.png"
import Coffee from "../media/projects_img/Coffee.jpg"
import Computer from "../media/projects_img/Computer.jpg"
import Restaurant from "../media/projects_img/Restaurant.jpg"
import Sport from "../media/projects_img/Sport.webp"
import Travel from "../media/projects_img/Travel.jpg"

export default function LayoutPage(){
    let layouts = [
        {
            id: 1, 
            name: "Burger", 
            img: Burger, 
            demo: "https://ihorutkin.github.io/Burger/",
            github: "https://github.com/ihorutkin/Burger",
            description: "This is layout of burger restaurant"
        },
        {
            id: 2, 
            name: "Coffee", 
            img: Coffee, 
            demo: "https://ihorutkin.github.io/Coffee/",
            github: "https://github.com/ihorutkin/Coffee",
            description: "This is layout of coffee internet shop"
        },
        {
            id: 3, 
            name: "Computer", 
            img: Computer, 
            demo: "https://ihorutkin.github.io/Computer/",
            github: "https://github.com/ihorutkin/Computer",
            description: "This is layout of computer internet shop"
        },
        {
            id: 4, 
            name: "Sport", 
            img: Sport, 
            demo: "https://ihorutkin.github.io/Sport/",
            github: "https://github.com/ihorutkin/Sport",
            description: "This is layout of fitness place"
        },
        {
            id: 5, 
            name: "Travel", 
            img: Travel, 
            demo: "https://ihorutkin.github.io/travel/",
            github: "https://github.com/ihorutkin/travel",
            description: "This is layout of travel internet shop"
        },
        {
            id: 6, 
            name: "Restaurant", 
            img: Restaurant, 
            demo: "https://ihorutkin.github.io/Restaurant/",
            github: "https://github.com/ihorutkin/Restaurant",
            description: "This is layout of restaurant"
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