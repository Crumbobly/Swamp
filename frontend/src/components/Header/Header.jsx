import React , {useState} from "react";
import favicon from '../../assets/images/favicon/frog-favicon.svg'
import './Header.css'

import {Link, Route, Routes} from 'react-router-dom';
import Links from "./Links";
import IconsBlock from "./IconsBlock";



function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleSearchClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <header className="header">

                <nav className="navbar navbar-dark pb-0 pb-sm-2">

                    <div className="container-fluid mx-3 mx-md-4 p-0 ">

                        {/* Brand */}
                        <Link className="navbar-brand" to="#">
                            <img src={favicon} alt="frog" width="30" height="24"
                                 className="navbar_brand_img d-inline-block align-text-bottom"/>
                            Swamp
                        </Link>

                        {/* General Navbar Links*/}
                        <div className="navbar-nav general_navbar_links navbar_center_content">
                            <Links />
                        </div>

                        {/* Navbar icons */}
                        <div className="d-flex flex-row">
                            <IconsBlock expanded={expanded} onClick={handleSearchClick}/>
                        </div>

                    </div>

                    {/* Additional Navbar Links */}
                    <div className="navbar-nav additional_navbar_links justify-content-around w-100 my-2">
                        <Links />
                    </div>

                </nav>

                {/* Place for search input */}
                <Routes>
                    <Route path="/posts" element={
                        <div className={`nav__dropdown p-3 ${expanded ? "active" : "" } `} id="new_place_for_search_input" >

                        </div>

                    }/>
                </Routes>


            </header>


        </>

    )
}


export default Header;