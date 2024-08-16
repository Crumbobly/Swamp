import React from "react";
import styles from './NotFoundPage.module.css'

function NotFoundPage(){
    return (
        <div className={`${styles.img_container}`}>
            <img src="/images/404.png" alt="Image"/>
        </div>
    )
}

export default NotFoundPage