import $ from 'jquery'

function setMargin() {
    const headerHeight = $("#header").outerHeight();
    const main = $("#main")
    main.css("margin-top", headerHeight + "px");
}



$(window).on("load", function () {
    function delayedSetMargin() {
        requestAnimationFrame(setMargin);
    }

    setTimeout(function () {

        const resizeObserver = new ResizeObserver(delayedSetMargin)
        const $header = $("#header");

        if ($header.length) {
            resizeObserver.observe($header.get(0))
        } else {
            console.warn("Header element not found!");
        }

    }, 100)
});
