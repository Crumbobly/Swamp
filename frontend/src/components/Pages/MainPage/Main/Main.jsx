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

        <main>
            <div className="row mx-4 mx-md-4 py-3 d-flex overflow-hidden flex-column h-100">

                <div className="col col-auto col-xl-2 col-lg-3 p-0 background_rounded bg-white mt-0 h-100"
                     id="parentStatisticDiv">
                    <Statistics/>
                </div>

                {/*TODO("Отступ на телефоне")*/}
                <div className="col col-12 col-xl-10 col-lg-9 p-0 ps-lg-3 d-flex overflow-hidden h-100">

                    <Scrollable>
                        <MainPageContent>

                        </MainPageContent>
                    </Scrollable>

                </div>

            </div>

        </main>

    )
}

export default Main;