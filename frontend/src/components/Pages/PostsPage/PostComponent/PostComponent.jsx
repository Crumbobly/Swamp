import React from "react";

import style from "./PostComponent.module.css"

import dislike_icon from "../../../../assets/images/icons/dislike-outline.svg"
import like_icon from "../../../../assets/images/icons/like-outline.svg"
import comm_icon from "../../../../assets/images/icons/chat-square-text-fill.svg"
import user_icon from "../../../../assets/images/icons/user_icon.png"

function PostComponent() {
    return (
        <div className={style.post_component}>

            <div >
                <div className="d-inline-block">
                    <img className={style.user_icon} src={user_icon} alt="user icon" />
                    <p className="d-inline ms-2">Снегр</p>
                </div>
                <p className="d-inline mb-0 float-end fw-light me-2">14 часов назад</p>
            </div>

            <div className={style.line} />

            <div className={style.post_component_content}>
                <h6>Заголовок</h6>
                <p>Привет, моё имя - Снегр. Я прилететь из солнечный Ирак. <br /> Моя страна воевать, поэтому я
                    прилететь. В великий Россия хорошо, но холодно</p>
            </div>

            <div className={style.line} />

            <div className={style.post_component_footer}>

                <div>

                    <div className={style.tag_block}>
                        <a href="#">Россия,</a>
                        <a>Ирак,</a>
                        <a>Миграция,</a>
                        <a>Иностранец,</a>
                        <a>FFfdfsdfdsf,</a>
                        <a>efw,</a>
                        <a>regewfwer,</a>
                        <a>efwefew-efwefwefas</a>
                    </div>

                    <div className="d-inline float-end">
                        <img src={comm_icon} className="me-1" width="18px" height="18px" alt="comment"></img>
                        <img src={like_icon} className="me-1" width="18px" height="18px" alt="like"></img>
                        <img src={dislike_icon} className="me-2" width="18px" height="18px" alt="dislike"></img>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default PostComponent