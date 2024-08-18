import styles from '../Authorization.module.css';
import {Link} from "react-router-dom";

export default function Login() {


    return (
        <div className={styles.login_wrap}>

            <div className={`border d-flex flex-column mx-3 ${styles.login_form}`}>

                <div className="mx-4 p-3">

                    <form>

                        <div className="text-center mt-4 mb-4">
                            <p className="h4">Вход</p>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="loginInput">Логин*</label>
                            <input type="text" className="form-control" id="loginInput" required/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="passwordInput">Пароль*</label>
                            <input type="password" className="form-control" id="passwordInput" required/>
                        </div>

                        <div className="d-flex">
                            <div className="form-check me-3">
                                <input type="checkbox" className="form-check-input" id="rememberMeCheckBox"/>
                                <label className="form-check-label" htmlFor="rememberMeCheckBox">Запомнить меня</label>
                            </div>
                            <Link className="text-decoration-none ms-auto" to="/recovery">Забыли пароль?</Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <button className="btn btn-primary my-3 me-3">
                                Вход
                            </button>
                            <Link className="ms-auto text-decoration-none" to="/reg">Нет аккаунта?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}