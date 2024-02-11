import React, { useState } from "react";
import "../styles/topics/layoutBlock.css"
import { useTranslation } from "react-i18next";

export default function LayoutBlock(props){
    const {t, i18n} = useTranslation()
    const [modal, setModal] = useState(false)

    const changeModal = () => {
        setModal(!modal)
    }
    return(
        <article className="layout_item">
            <div className="layout_item_img" style={{backgroundImage: `url(${props.project_img})`, backgroundSize: "cover"}}>
                {modal && (
                    <>
                        <div className="modal_container"></div>
                        <p className="modal_description">{props.project_desc}</p>
                    </>
                )}
            </div>
            <div className="layout_item_content">
                <div className="layout_item_name">
                    <h2>{props.project_name}</h2>
                    <button onClick={changeModal} className="layout_description layout_link"><i class="fa-brands fa-readme"></i>{t("projects_button.description")}</button>
                </div>
                <div className="layout_item_link">
                    <a href={props.project_demo} className="layout_link"><i class="fa-solid fa-location-dot"></i>{t("projects_button.visit_site")}</a>
                    <a href={props.project_github} className="layout_link"><i class="fa-brands fa-github"></i>{t("projects_button.github")}</a>
                </div>
            </div>
        </article>
    )
}