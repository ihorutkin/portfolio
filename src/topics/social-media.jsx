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
            <ul className="lang_container">
                    <li className="lang_title">
                        <i class="fa-solid fa-language"></i>
                        <ul className="lang_list">
                            <li className="lang_item">
                                <button className="lang_btn" onClick={() => changeLanguage("en")}>EN</button>
                            </li>
                            <li className="lang_item">
                                <button className="lang_btn" onClick={() => changeLanguage("uk")}>UK</button>
                            </li>
                            <li className="lang_item">
                                <button className="lang_btn" onClick={() => changeLanguage("pl")}>PL</button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <i className="fa-brands fa-instagram item"></i>
                <i className="fa-brands fa-facebook item"></i>
                <i className="fa-brands fa-github item"></i>
            </div>
        </aside>
    )
}