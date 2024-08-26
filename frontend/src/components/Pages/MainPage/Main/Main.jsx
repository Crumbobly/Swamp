import React, {useEffect} from "react";

import './Main.css'

import Statistics from "../Statistics/Statistics";
import MainPageContent from '../Content/Content'

import {InitMainPageScript, DestroyMainPageScript} from '../../../../assets/js/MainPageScript'


function Main() {

    useEffect(() => {
        // Инициализация скрипта
        InitMainPageScript()

        return () => {
            // Очистка скрипта при размонтировании компонента
            DestroyMainPageScript()
        };
    }, []);


    return (

        <div className="main-inner">
            <div className="mx-2 mx-md-4 pb-0 d-flex flex-row ">

                <div id="statisticDivWrapper">
                    <div className="my-3" id="statisticDiv">
                        <Statistics>

                        </Statistics>
                    </div>
                </div>


                <div className="ps-3" id="mainContentWrapper">
                    <MainPageContent>

                    </MainPageContent>
                </div>


            </div>
        </div>


    )
}

export default Main;