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

            <div className="row mx-2 mx-md-4 d-flex overflow-hidden flex-column h-100">

                <div className="d-flex overflow-hidden flex-column h-100">


                    <Scrollable>
                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="paginator">

                        </div>

                    </Scrollable>

                </div>

            </div>


        </main>
    )
}