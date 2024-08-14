
import logo from '../../../assets/images/icons/images-svgrepo-com.svg';
import '../../../assets/css/Posts.css';
import '../../../assets/css/general.css';

export default function Post() {


    return (




        <main class="container-fluid flex-fill">


            <div class="row h-100 px-5 py-3">

                <div class="col-2 p-0 background_rounded bg-white">

                    <div class="mx-3">

                        <div class="text">
                            <p class="mb-4">Популярные теги</p>
                        </div>


                        <div class="footer-text py-4">

                            <div class="contents">
                                <img src={logo} class="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Анектоды</p>
                            </div>

                            <div class="contents">
                                <img src={logo} class="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Еда</p>
                            </div>

                            <div class="contents">
                                <img src={logo} class="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p class="m-0 ">Строительная компания "ВладЛох"</p>
                            </div>

                            <div class="contents">
                                <img src={logo} class="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Жизнь</p>
                            </div>

                            <div class="contents">
                                <img src={logo} class="rounded-3 " width="32" height="32"
                                    alt="" />
                                <p>Картинка с текстом</p>
                            </div>

                        </div>

                    </div>


                </div>


                <div class="col-10 p-0 ps-3">

                    <div class="background_rounded bg-white h-100">

                    </div>

                </div>

            </div>
        </main>

    )
}