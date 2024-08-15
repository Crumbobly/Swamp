
function StatisticItem({children, logo, statistic_item_name}){

    return(
        <div className="statistic_item mt-2 rounded-1" data-tooltip={children}>
            <img src={logo} alt="posts" />

            <p className="m-0">
                {statistic_item_name}
            </p>

            <div className="ms-auto tooltip-trigger">
                <p className="counter">
                    {children}
                </p>
            </div>

        </div>
    )
}

export default StatisticItem
