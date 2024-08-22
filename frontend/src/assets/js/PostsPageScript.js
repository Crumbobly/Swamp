function handleResize() {
    const searchInput = document.getElementById('search-field-input');
    const searchField = document.getElementById('search-field');
    const newPlaceForSearchInput = document.getElementById('new_place_for_search_input');

    if (searchInput && searchField && newPlaceForSearchInput) {
        if (window.innerWidth < 767) {
            if (!newPlaceForSearchInput.contains(searchInput)) {
                newPlaceForSearchInput.appendChild(searchInput);
            }
        } else {
            searchField.appendChild(searchInput);
        }
    } else {
        return 0;
    }
}



function initScript() {
    handleResize();
    window.addEventListener('resize', handleResize);
}

function destroyScript() {
    window.removeEventListener('resize', handleResize);
}

export const InitPostsPageScript = () => initScript();
export const DestroyPostsPageScript = () => destroyScript();
