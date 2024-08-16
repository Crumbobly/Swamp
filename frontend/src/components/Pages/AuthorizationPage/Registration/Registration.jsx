import styles from '../Authorization.module.css';
import {Link} from "react-router-dom";

export default function Registration() {

    return (
        <div className={styles.login_wrap}>
            <div className={`border d-flex flex-column ${styles.login_form}`}>

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

                        <div className="d-flex flex-wrap">

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMeCheckBox"/>
                                <label className="form-check-label" htmlFor="rememberMeCheckBox">Запомнить меня</label>
                            </div>

                            <Link className="text-decoration-none ms-auto" href="#" to="/recovery">Забыли пароль?</Link>

                        </div>

                        <button className="btn btn-primary my-3" type="submit">
                            Регистрация
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )

}