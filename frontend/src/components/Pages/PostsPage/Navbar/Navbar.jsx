import React from "react";
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar p-0 w-100">
            <div className="container-fluid p-0 w-100">
                <form className="d-flex w-100">
                    <div className="navbar-wrapper d-flex p-2 px-3 px-md-4 w-100 ">
                        <input className="form-control me-2" type="search" placeholder="Тег, тег, ..."
                               aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Поиск</button>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;