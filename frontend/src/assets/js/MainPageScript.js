function handleResize() {
    const newStatisticDiv = document.getElementById('newStatisticDiv');
    const statisticDiv = document.getElementById('statisticDiv');
    const parentStatisticDiv = document.getElementById('parentStatisticDiv');

    if (newStatisticDiv && statisticDiv && parentStatisticDiv) {
        if (window.innerWidth < 991) {
            if (!newStatisticDiv.contains(statisticDiv)) {
                newStatisticDiv.appendChild(statisticDiv);
            }
        } else {
            parentStatisticDiv.appendChild(statisticDiv);
        }
    } else {
        console.error('Один или несколько элементов не найдены в DOM.');
    }
}

function tooltipLogic() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    tooltipTriggers.forEach(trigger => {
        const statisticItem = trigger.closest('.statistic_item');

        if (isTextOverflowing(trigger)) {
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

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', tooltipLogic);
}

function destroyScript() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('resize', tooltipLogic);
}

export const InitMainPageScript = () => initScript();
export const DestroyMainPageScript = () => destroyScript();
