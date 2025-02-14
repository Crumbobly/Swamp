import React from 'react';

import "./SearchField.css"

const SearchBar = ( { expanded, onClick } ) => {
    return (
        <div className="d-flex align-items-center me-2 search-field" id="search-field">
            <button
                type="button"
                onClick={onClick}
                className={expanded ? "active" : ""}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className={`bi bi-search ${expanded ? "navbar_icon_dark" : "navbar_icon"}`}
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                    />
                </svg>
            </button>

            <input
                type="text"
                className={`form-control ${expanded ? "active" : ""}`}
                placeholder="Поиск"
                id="search-field-input"
            />
        </div>
    );
};

export default SearchBar;
