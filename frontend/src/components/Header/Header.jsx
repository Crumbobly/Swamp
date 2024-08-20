import React from "react";
import favicon from '../../assets/images/favicon/frog-favicon.svg'
import './Header.css'

import {Link, Route, Routes} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Dropdown, DropdownMenu, NavDropdown} from "react-bootstrap";
import Navbar from "../Pages/PostsPage/Navbar/Navbar";


function Header() {

    return (
        <>
            <header className="header">

                <nav className="navbar navbar-expand-lg navbar-dark pb-0 pb-sm-2">

                    <div className="container-fluid mx-3 mx-md-4 p-0 ">

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

                        <Dropdown className="px-0">
                            <Dropdown.Toggle as="button" className="btn px-0 d-flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="navbar_user_icon" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fillRule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to="/login" className="dropdown-item ">
                                    Вход
                                </Link>

                            </Dropdown.Menu>
                        </Dropdown>

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

                <Routes>
                    <Route path="/posts" element={<Navbar/>}/>
                </Routes>


            </header>


        </>

    )
}


export default Header;