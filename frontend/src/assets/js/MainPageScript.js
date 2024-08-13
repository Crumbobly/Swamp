
export default function MainPageScriptInit() {

    document.addEventListener('DOMContentLoaded', function () {
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

    });


    document.addEventListener("DOMContentLoaded", function () {
        function checkResolution() {
            const outerDiv = document.getElementById('div2');
            const innerDiv = document.getElementById('div1');

            if (window.innerWidth < 991) {
                if (!outerDiv.contains(innerDiv)) {
                    outerDiv.appendChild(innerDiv);
                }
            } else {
                // TODO("Сделать обратное")
            }
        }

        checkResolution();
        window.addEventListener('resize', checkResolution);
    });

}
