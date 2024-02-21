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


/*
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
*/

/*
.lang_container{
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    cursor: pointer;
    color: #e5e5e5;
    list-style: none;
}

.fa-language{
    font-size: 24px;
}

.lang_list{
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
}

.lang_title:hover > .lang_list{
    display: block;
}

.lang_item{
    padding: 0 1rem;
    cursor: pointer;
}

.lang_item:hover{
    border-left: 1px solid #e5e5e5;
}

.lang_btn{
    background: none;
    border: none;
    color: #e5e5e5;
    cursor: pointer;
}
*/