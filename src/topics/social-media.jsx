import React from "react";
import "../styles/topics/social-media.css"
import { useTranslation } from "react-i18next";

export default function Aside(){
    const {t, i18n} = useTranslation()

    function changeLanguage(language){
        return i18n.changeLanguage(language)
    }
    console.log('i18n', i18n)
    console.log('t', t)
    return (
        <aside className="aside">
            <div className="social-media">
                <i className="fa-brands fa-instagram item"></i>
                <i className="fa-brands fa-facebook item"></i>
                <i className="fa-brands fa-github item"></i>
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("uk")}>UA</button>
                <button onClick={() => changeLanguage("pl")}>PL</button>
            </div>
        </aside>
    )
}