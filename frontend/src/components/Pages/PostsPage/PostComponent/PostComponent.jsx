import React from "react";

import style from "./PostComponent.module.css"

import user_icon from "../../../../assets/images/icons/user_icon.png"

function PostComponent() {
    return (
        <div className={style.post_component}>

            <div className="d-inline">
                <div className="d-inline-block">
                    <img className={style.user_icon} src={user_icon} alt="user icon"/>
                    <p className="d-inline ms-2">Снегр</p>
                </div>
                <p className="d-inline mb-0 float-end fw-light me-2">14 часов назад</p>
            </div>

            <div className={style.line}/>

            <div className={style.post_component_content}>
                <h6>Заголовок</h6>
                <p>Привет, моё имя - Снегр. Я прилететь из солнечный Ирак. <br/> Моя страна воевать, поэтому я
                    прилететь. В великий Россия хорошо, но холодно</p>
            </div>

            <div className={style.line}/>

            <div className={style.post_component_footer}>
                <p className="fw-light mb-0">Россия, Ирак, миграция, иностранец, ...</p>
            </div>


        </div>
    )
}

export default PostComponent