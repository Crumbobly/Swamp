import $ from "jquery"

function setMainMargin() {
    const headerHeight = $("#header").outerHeight();
    const statisticDivWrapper = $("#statisticDivWrapper")
    const statisticDiv = $("#statisticDiv")
    const mainContentWrapper = $("#mainContentWrapper")
    const statisticDivWidth = statisticDiv.width()

    if (statisticDivWrapper.children().length ) {
        statisticDivWrapper.css("margin-top", headerHeight + "px");
        mainContentWrapper.css("margin-left", statisticDivWidth + "px")
    }
    else {
        statisticDivWrapper.css("margin-top", 0 + "px");
        mainContentWrapper.css("margin-left", 0 + "px")
    }
}

function handleResize() {
    const newStatisticDiv = document.getElementById('newStatisticDiv');
    const statisticDiv = document.getElementById('statisticDiv');
    const statisticDivWrapper = document.getElementById('statisticDivWrapper');

    if (newStatisticDiv && statisticDiv && statisticDivWrapper) {
        console.log(window.innerWidth)
        if (window.innerWidth < 991) {

            if (!newStatisticDiv.contains(statisticDiv)) {
                newStatisticDiv.appendChild(statisticDiv);
            }
        } else {
            statisticDivWrapper.appendChild(statisticDiv);
        }
    } else {
        return 0;
    }
}

function tooltipLogic() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    tooltipTriggers.forEach(trigger => {
        const statisticItem = trigger.closest('.statistic_item');

        if (isTextOverflowing(trigger)) {
            if (!statisticItem.hasAttribute("data-tooltip")) {
                statisticItem.setAttribute("data-tooltip", statisticItem.getAttribute("data-tooltip-copy"))
            }
            return 0;
        } else {
            statisticItem.removeAttribute("data-tooltip");
            return 0;
        }
    });

    function isTextOverflowing(element) {
        return element.scrollWidth > element.clientWidth;
    }
}

function initScript() {
    tooltipLogic();
    handleResize();
    setMainMargin()

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', tooltipLogic);
    window.addEventListener('resize', setMainMargin);
}

function destroyScript() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('resize', tooltipLogic);
    window.removeEventListener('resize', setMainMargin);
}

export const InitMainPageScript = () => initScript();
export const DestroyMainPageScript = () => destroyScript();