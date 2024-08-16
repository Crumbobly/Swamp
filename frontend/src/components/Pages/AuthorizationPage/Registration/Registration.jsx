import './Registration.css';
export default function Registration() {



    return (
        <div className="login_wrap ">
            <div className="border d-flex flex-column login_form" style={{ width: 30 + "rem" }}>
                <div className="mx-4 p-3">
                    <div className="text-center mt-4 mb-4">
                        <p className="h4">Регистрация</p>
                    </div>
                    <div className="cs-form">
                        <label>Почта</label>
                        <input type="email" className="form-control border-top-0 border-left-0 border-right-0" />

                    </div>
                    <div className="cs-form">
                        <label>Логин</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" />

                    </div>
                    <div className="cs-form">
                        <label>Пароль</label>
                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0" />

                    </div>
                    <div className="cs-form">
                        <label>Повторите пароль</label>
                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0" />

                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        <input type="checkbox" className="me-1" />
                        <p className="m-0">Запомнить меня</p>
                        <a className="text-decoration-none ms-3" href="#">Забыли пароль?</a>
                    </div>
                    <button className="btn btn-dark btn-block my-3">
                        Вход
                    </button>
                </div>
            </div>
        </div>
    )

}