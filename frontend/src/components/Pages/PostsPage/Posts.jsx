import './Posts.css';
import React, {useEffect} from "react";
import {DestroyPostsPageScript, InitPostsPageScript} from "../../../assets/js/PostsPageScript";
import PostComponent from "./PostComponent/PostComponent";

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

        <div className="mx-3 mt-3">
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>

        </div>

    )
}