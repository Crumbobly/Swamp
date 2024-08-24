import React, {useEffect} from "react";

import './Main.css'

import Statistics from "../Statistics/Statistics";
import Scrollable from '../../../Scrollable/Scrollable'
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

                <div className="d-flex flex-column " id="statisticDiv">
                    <Statistics>

                    </Statistics>
                </div>

                <div className="d-flex flex-column">
                    <MainPageContent>

                    </MainPageContent>
                </div>

            </div>
        </div>



    )
}

export default Main;