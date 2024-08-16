
import logo from '../../../assets/images/icons/images-svgrepo-com.svg';
import './Posts.css';


export default function Posts() {


    return (

        <main className="container-fluid flex-fill">


            <div className="row h-100 px-5 py-3">

                <div className="col-2 p-0 background_rounded bg-white">

                    <div className="mx-3">

                        <div className="text">
                            <p className="mb-4">Популярные теги</p>
                        </div>

                        <div className="footer-text py-4">

                            <div className="contents">
                                <img src={logo} className="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Анектоды</p>
                            </div>

                            <div className="contents">
                                <img src={logo} className="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Еда</p>
                            </div>

                            <div className="contents">
                                <img src={logo} className="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p className="m-0 ">Строительная компания "ВладЛох"</p>
                            </div>

                            <div className="contents">
                                <img src={logo} className="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Жизнь</p>
                            </div>

                            <div className="contents">
                                <img src={logo} className="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Картинка с текстом</p>
                            </div>

                        </div>

                    </div>


                </div>


                <div className="col-10 p-0 ps-3">

                    <div className="background_rounded bg-white h-100">

                    </div>

                </div>

            </div>
        </main>

    )
}