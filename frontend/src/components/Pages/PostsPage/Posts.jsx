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

        <main>
            <div style={{height: 1000+"px", backgroundColor:"honeydew"}}></div>
            <div style={{height: 1000+"px", backgroundColor:"lightpink"}}></div>

        </main>
    )
}