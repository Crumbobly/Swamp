import React from "react";
import SearchField from "./SearchField";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

function IconsBlock({expande,onClick}) {
    return (
        <>
            <Routes>
                <Route path="/posts" element={
                    <>
                        {/* icon 1 */}
                        <SearchField expande={expande} onClick={onClick}>

                        </SearchField>

                        {/* icon 2 */}
                        <div className="d-flex align-items-center me-2">
                            <NavLink type="button" className="bg-transparent border-0 ps-0" style={{paddingRight: 3 + "px"}}
                                     to="/newPost">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-plus-circle navbar_icon" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                </svg>
                            </NavLink>
                        </div>
                    </>
                } />
            </Routes>


            {/* icon 3 */}
            <Dropdown className="px-0">
                <Dropdown.Toggle as="button" className="btn px-0 d-flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="navbar_icon" viewBox="0 0 16 16">
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
        </>
    );
}

export default IconsBlock;