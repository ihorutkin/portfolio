import React from "react";
import "../styles/topics/main.css"
import video from "../media/video.mp4"

export default function Main(){
    return  (
        <section className="main-container">
            <video src={video} loop autoPlay muted></video>
            <article className="text-container">
                <h2 className="title-name">
                    My name is Ihor Utkin!
                </h2>
                <h2 className="title-frontend">
                Jestem programistem front-end z 3 letnim doświadczeniem, z nich
                półtorarocznym doświadczeniem komercyjnym. Potrafię tworzyć strony
                internetowe i aplikacje internetowe zarówno w zwykłym JS jak i w jego
                frameworkach takich jak React.js i Next.js, współpracować z menadżerem
                stanu Redux, posiadam umiejętność pracy z bazami danych z
                wykorzystaniem SQL. Spośród wszystkich moich zalet mogę wyrażnie
                podkreślic chęć i szybkość uczenia się nowych rzeczy ta łatwa praca w
                kolektywie

                </h2>
            </article>
        </section>
    )
}