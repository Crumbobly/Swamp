import React from "react";
import {NavLink} from "react-router-dom";

function Links(){
    return (
        <>
            <NavLink
                className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link navbar_link"
                }
                to="/"
            >
                Главная
            </NavLink>

            <NavLink
                className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link navbar_link"
                }
                to="/posts"
            >
                Посты
            </NavLink>

            <NavLink
                className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link navbar_link"
                }
                to="/chats"
            >
                Чаты
            </NavLink>
        </>
    )
}

export default Links;