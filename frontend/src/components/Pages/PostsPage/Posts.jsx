import './Posts.css';
import Scrollable from "../../Scrollable/Scrollable";
import React, {useEffect} from "react";
import {DestroyPostsPageScript, InitPostsPageScript} from "../../../assets/js/PostsPageScript";

export default function Posts() {

    useEffect(() => {
        // Инициализация скрипта
        InitPostsPageScript()

        return () => {
            // Очистка скрипта при размонтировании компонента
            DestroyPostsPageScript()
        };
    }, []);


    return (

        <>
            <div className="m-3">
                <div className="post_del mb-3 background_rounded"></div>
                <div className="post_del mb-3 background_rounded"></div>
                <div className="post_del background_rounded"></div>
            </div>

        </>
    )
}