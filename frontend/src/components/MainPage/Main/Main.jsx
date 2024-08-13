import React, {useEffect} from "react";

import './Main.css'
import '../../../assets/css/Scrollbar.css'
import '../../../assets/css/Tooltip.css'

import chat_1 from '../../../assets/images/icons/chat-fill.svg'
import chat_2 from '../../../assets/images/icons/chat-square-text-fill.svg'
import like from '../../../assets/images/icons/like.svg'
import pencil from '../../../assets/images/icons/pencil-fill.svg'
import person from '../../../assets/images/icons/person-fill.svg'


function Main() {


    return (

        <main>
            <div className="row mx-4 mx-md-4 py-3 d-flex overflow-hidden flex-column">

                <div className="col col-auto col-xl-2 col-lg-3 p-0 background_rounded bg-white mt-0">

                    <div className="px-3 pb-3 background_rounded bg-white" id="div1">
                        <div className="text">
                            <p>Статистика</p>
                        </div>

                        <div className="statistic_item mt-3 rounded-1" data-tooltip="73453">
                            <img src={pencil} alt="posts"/>

                            <p className="m-0">
                                Посты
                            </p>

                            <div className="ms-auto tooltip-trigger">
                                <p className="counter">
                                    73453
                                </p>
                            </div>

                        </div>

                        <div className="statistic_item mt-2 rounded-1" data-tooltip="987654321012">
                            <img src={chat_2} alt="comments"/>

                            <p className="m-0">
                                Комментарии
                            </p>

                            <div className="ms-auto tooltip-trigger">
                                <p className="counter">
                                    987654321012
                                </p>
                            </div>

                        </div>

                        <div className="statistic_item mt-2 rounded-1" data-tooltip="12673800">
                            <img src={like} alt="grades"/>

                            <p className="m-0">
                                Оценки
                            </p>

                            <div className="ms-auto tooltip-trigger">
                                <p className="counter">
                                    12673800
                                </p>
                            </div>

                        </div>

                        <div className="statistic_item mt-2 rounded-1" data-tooltip="123">
                            <img src={person} alt="users"/>

                            <p className="m-0">
                                Пользователи
                            </p>

                            <div className="ms-auto tooltip-trigger">
                                <p className="counter">
                                    123
                                </p>
                            </div>

                        </div>


                        <div className="statistic_item mt-2 rounded-1" data-tooltip="0">
                            <img src={chat_1} alt="messages"/>

                            <p className="m-0">
                                Сообщения
                            </p>

                            <div className="ms-auto tooltip-trigger">
                                <p className="counter">
                                    0
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col col-12 col-xl-10 col-lg-9 p-0 ps-lg-3 d-flex overflow-hidden">

                    <div className="scrollable pe-3">

                        <div className="background_rounded mb-3 img_container" style={{height: 350 + 'px'}}>
                            <img src="images/swamp.svg" alt="Болото фон"/>
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

                            <p className="ps-4 mb-0" style={{height: 1000 + 'px'}}>
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