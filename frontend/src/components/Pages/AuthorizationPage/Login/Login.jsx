import styles from '../Authorization.module.css';
import {Link} from "react-router-dom";

export default function Login() {


    return (
        <div className={styles.login_wrap}>
            <div className={`border d-flex flex-column ${styles.login_form}`} style={{width: 30 + "rem"}}>
                <div className="mx-4 p-3">

                    <div className="text-center mt-4 mb-4">
                        <p className="h4">Вход</p>
                    </div>

                    <div className="cs-form">
                        <label>Логин</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0"/>
                    </div>

                    <div className="cs-form">
                        <label>Пароль</label>
                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0"/>
                    </div>

                    <div className="d-flex flex-wrap">
                        <input type="checkbox" className="me-1"/>
                        <p className="m-0">Запомнить меня</p>
                        <Link className="text-decoration-none ms-auto" to="/recovery">Забыли пароль?</Link>
                    </div>

                    <button className="btn btn-dark btn-block my-3">
                        Вход
                    </button>
                </div>
            </div>
        </div>
    )
}