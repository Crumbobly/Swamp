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
            <div style={{height: 100 + "px", backgroundColor: "honeydew"}} id="DDD"></div>
            <div style={{height: 1000 + "px", backgroundColor: "lightpink"}}></div>

        </>
    )
}