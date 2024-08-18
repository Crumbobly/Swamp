import React from "react";
import styles from "./Content.module.css"
import img from "../../../../assets/images/swamp.svg"

function Content() {
    return (
        <>
            <div className={`background_rounded mb-3 ${styles.img_container}`} style={{height: 350 + 'px'}}>
                <img src={img} alt="Болото фон"/>
            </div>

            <div className="background_rounded bg-white mb-3 ">

                <div className={`rounded-top-4 py-2 ps-4 ${styles.site_info_div}`}>
                    <h6 className="m-0">Новости</h6>
                </div>

                <p className="ps-4 pb-3">
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

            <div className="background_rounded bg-white mb-3 mb-lg-0 ">

                <div className={`rounded-top-4 py-2 ps-4 ${styles.site_info_div}`}>
                    <h6 className="m-0">Информация о сайте</h6>
                </div>

                <p className="ps-4 pb-3 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                    consequuntur
                    dolorem,
                    doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit possimus quam qui
                    ratione
                    recusandae soluta tenetur.

                </p>

            </div>

            <div id="newStatisticDiv">

            </div>
            {/* TODO("Какой-то прикол с нижним отступом на телефоне (Safari)")*/}
        </>
    )
}

export default Content