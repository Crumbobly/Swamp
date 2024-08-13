
window.onload = function (){
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    tooltipTriggers.forEach(trigger => {

        const statisticItem = trigger.closest('.statistic_item');

        if (isTextOverflowing(trigger)) {

            return 0;
        } else {
            statisticItem.removeAttribute("data-tooltip")
            return 0;
        }

    });

    function isTextOverflowing(element) {
        return element.scrollWidth > element.clientWidth;
    }

};


window.onresize = window.onload = function (){

        const outerDiv = document.getElementById('div2');
        const innerDiv = document.getElementById('div1');
        const d3 = document.getElementById('div3');
        // TODO("Нормальные имена")

        if (window.innerWidth < 991) {
            if (!outerDiv.contains(innerDiv)) {
                outerDiv.appendChild(innerDiv);
            }
        } else {
            d3.appendChild(innerDiv);
        }

};

