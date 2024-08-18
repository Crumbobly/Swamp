import styles from '../Authorization.module.css';
import {Link} from "react-router-dom";

export default function Registration() {

    return (
        <div className={styles.login_wrap}>
            <div className={`border d-flex flex-column mx-3 ${styles.login_form}`}>

                <div className="mx-4 p-3">

                    <form>

                        <div className="text-center mt-4 mb-3">
                            <h4>Регистрация</h4>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="emailInput">Почта</label>
                            <input type="email" className="form-control" id="emailInput"/>
                            <div id="emailHelp" className="form-text">Почта будет использоваться при восстановлении доступа к аккаунту</div>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="loginInput">Логин*</label>
                            <input type="text" className="form-control" id="loginInput" required/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="passwordInput">Пароль*</label>
                            <input type="password" className="form-control" id="passwordInput" required/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="passwordRepeatInput">Повторите пароль*</label>
                            <input type="password" className="form-control" id="passwordRepeatInput" required/>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMeCheckBox"/>
                            <label className="form-check-label" htmlFor="rememberMeCheckBox">Запомнить меня</label>
                        </div>

                        <div className="d-flex align-items-center">
                            <button className="btn btn-primary my-3 me-3" type="submit">
                                Регистрация
                            </button>
                            <Link className="ms-auto text-decoration-none" to="/login">Есть аккаунт?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}