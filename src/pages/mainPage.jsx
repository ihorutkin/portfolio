import React from "react";
import Main from '../topics/main';
import Service from '../components/mainPage/service';
import Headers from '../topics/header';
import Aside from '../topics/social-media';
import About from "../components/mainPage/about";
import ListOfSkills from "../components/mainPage/listOfSkills";
import Work from "../components/mainPage/works";
import Contact from "../components/mainPage/contact";
import Footer from "../topics/footer";

export default function MainPage(){
    return(
        <div>
            <Headers />
            <Aside />
            <Main />
            <About />
            <Service />
            <ListOfSkills />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}