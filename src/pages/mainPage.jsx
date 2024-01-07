import React from "react";
import Main from '../topics/main';
import Work from '../components/service';
import Headers from '../topics/header';
import Aside from '../topics/social-media';
import About from "../components/about";
import ListOfSkills from "../components/listOfSkills";

export default function MainPage(){
    return(
        <div>
            <Headers />
            <Aside />
            <Main />
            <About />
            <Work />
            <ListOfSkills />
        </div>
    )
}