import React from "react";
import "../styles/topics/skill.css"

export default function Skill(props){
    return (
        <div className="skill" data-aos="fade-right" data-aos-delay="150">{props.name}</div>
    )
}