import React from "react";
import favicon from '../../assets/images/favicon/frog-favicon.svg'
import './Header.css'

import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function Header() {

    return (

        <header className="header">

            <nav className="navbar navbar-expand-lg navbar-dark pb-0 pb-sm-2">

                <div className="container-fluid mx-4 p-0 ">

                    <a className="navbar-brand">
                        <img src={favicon} alt="frog" width="30" height="24"
                             className="navbar_brand_img d-inline-block align-text-bottom"/>
                        Swamp
                    </a>

                    <div className="navbar_center_content">
                        <ul className="navbar-nav general_navbar">
                            <li className="nav-item">
                                <NavLink
                                    className={({isActive}) =>
                                        isActive ? "nav-link active" : "nav-link navbar_link"
                                    }
                                    to="/"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3 mx-lg-2">
                                <NavLink
                                    className={({isActive}) =>
                                        isActive ? "nav-link active" : "nav-link navbar_link"
                                    }
                                    to="/posts"
                                >
                                    Посты
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({isActive}) =>
                                        isActive ? "nav-link active" : "nav-link navbar_link"
                                    }
                                    to="/chats"
                                >
                                    Чаты
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="align-items-center">

                        <a className="nav-link p-0 ms-1 " href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-person-circle navbar_user_icon" viewBox="0 0 16 16">

                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd"
                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="navbar-nav additional_navbar justify-content-around w-100" hidden="hidden">

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

                </div>
            </nav>
        </header>

    )
}


export default Header;