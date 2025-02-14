import React from "react";
import styles from "./Content.module.css"
import img from "../../../../assets/images/swamp.svg"

function Content() {
    return (
        <>
            <div className={`background_rounded mt-3 ${styles.img_container}`} >
                <img src={img} alt="Болото фон"/>
            </div>

            <div className=" d-flex mt-3 w-100 ">
                <div className={`background_rounded bg-white w-100`} id="news">
                    <div className={`rounded-top-4 py-2 ps-4 ${styles.site_info_div}`}>
                        <h6 className="m-0">Новости</h6>
                    </div>

                    <p className="px-4 pb-3 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                    andae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                    andae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                    andae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.  andae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                    andae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.
                        possimus quam qui ratione recusandae soluta tenetur.

                    </p>
                </div>
            </div>

            <div className=" d-flex mt-3 w-100 ">
                <div className={`background_rounded bg-white w-100`} id="info">
                    <div className={`rounded-top-4 py-2 ps-4 ${styles.site_info_div}`}>
                        <h6 className="m-0">Информация о сайте</h6>
                    </div>

                    <p className="px-4 pb-3 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                        consequuntur dolorem, doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                        consequuntur dolorem, doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, at
                        consequuntur dolorem, doloremque ducimus ea fugiat incidunt magnam, modi nemo non odit
                    </p>
                </div>
            </div>

            <div className="mt-3 pt-lg-0 mb-3" id="newStatisticDiv">

            </div>


        </>
    )
}

export default Content