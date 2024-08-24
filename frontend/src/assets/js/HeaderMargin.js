import $ from 'jquery'

function setMargin() {
    const headerHeight = $("#header").outerHeight();

    const main = $("#main")
    const statisticDivWrapper = $("#statisticDivWrapper")
    const mainContentWrapper = $("#mainContentWrapper")
    const statisticDivWrapperWidth = statisticDivWrapper.width()

    main.css("margin-top", headerHeight + "px");

    // TODO ("Page переход")
    statisticDivWrapper.css("margin-top", headerHeight + "px");
    mainContentWrapper.css("margin-left", 290+ "px")



}


// TODO ("Page переход")
$(window).on("load ", function () {
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
