import React from "react";
import "../styles/topics/social-media.css"
import { useTranslation } from "react-i18next";

export default function Aside(){
    const {t, i18n} = useTranslation()

    function changeLanguage(language){
        return i18n.changeLanguage(language)
    }
    return (
        <aside className="aside">
            <div className="social-media">
            <ul className="lang_container">
                    <li className="lang_title">
                        <i className="fa-solid fa-language"></i>
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
                <a href="https://www.linkedin.com/in/ihor-utkin/">
                    <i className="fa-brands fa-linkedin item"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100042482872993">
                    <i className="fa-brands fa-facebook item"></i>
                </a>
                <a href="https://github.com/ihorutkin">
                    <i className="fa-brands fa-github item"></i>
                </a>
            </div>
        </aside>
    )
}