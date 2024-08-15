import React, { useEffect } from "react";

import './Main.css'
import '../../../assets/css/Scrollbar.css'
import '../../../assets/css/Tooltip.css'



import Statistics from "../Statistics/Statistics";
import '../../../assets/js/MainPageScript'

import Header from "../../Header/Header";

function Main() {

    return (

        <main>
            <div className="row mx-4 mx-md-4 py-3 d-flex overflow-hidden flex-column">

                <div className="col col-auto col-xl-2 col-lg-3 p-0 background_rounded bg-white mt-0" id="div3">
                    <Statistics />
                </div>

                <div className="col col-12 col-xl-10 col-lg-9 p-0 ps-lg-3 d-flex overflow-hidden">

                    <div className="scrollable pe-3">

                        <div className="background_rounded mb-3 img_container" style={{ height: 350 + 'px' }}>
                            <img src="images/swamp.svg" alt="Болото фон" />
                        </div>

                        <div className="background_rounded bg-white text_container mb-3">

                            <div className="site_info_div rounded-top-4 py-2 ps-4">
                                <h6 className="m-0">Новости</h6>
                            </div>

                            <p className="ps-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                                consequuntur
                                dolorem,
                                doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit possimus quam qui
                                ratione
                                recusandae soluta tenetur.

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                                consequuntur
                                dolorem,
                                doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit possimus quam qui
                                ratione
                                recusandae soluta tenetur.

                            </p>

                        </div>

                        <div className="background_rounded bg-white text_container mb-3 mb-lg-0">

                            <div className="site_info_div rounded-top-4 py-2 ps-4">
                                <h6 className="m-0">Информация о сайте</h6>
                            </div>

                            <p className="ps-4 mb-0" style={{ height: 1000 + 'px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                                consequuntur
                                dolorem,
                                doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit possimus quam qui
                                ratione
                                recusandae soluta tenetur.

                            </p>

                        </div>

                        <div id="div2">

                        </div>
                        {/* TODO("Какой-то прикол с нижним отступом на телефоне (Safari)")*/}

                    </div>

                </div>

            </div>

        </main>

    )
}

export default Main;