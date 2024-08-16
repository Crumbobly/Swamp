import React from "react";
import styles from './NotFoundPage.module.css'
import img from '../../../assets/images/404.png'

function NotFoundPage(){
    return (
        <div className={styles.img_container}>
            <img src={img} alt="404"/>
        </div>
    )
}

export default NotFoundPage