import './Posts.css';
import Scrollable from "../../Scrollable/Scrollable";
import React from "react";
import logo from '../../../assets/images/icons/images-svgrepo-com.svg';

export default function Posts() {


    return (

        <main>
            <nav className="navbar navbar-light bg-light bg-dark navbar-dark">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Тег, тег, ..."
                               aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>

            <div className="row mx-2 mx-md-4 d-flex overflow-hidden flex-column h-100">

                {/*<div className="col col-auto col-xl-2 col-lg-3 p-0 background_rounded bg-white mt-0 h-100 ">*/}

                {/*    <div className="mx-3 h-100 tags_items">*/}

                {/*        <div className="text mb-3">*/}
                {/*            <p className="mb-4">Популярные теги</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Анектоды</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Еда</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p className="m-0 ">Строительная компания "ВладЛох"</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Жизнь</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Картинка с текстом</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Анектоды</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Еда</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p className="m-0 ">Строительная компания "ВладЛох"</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Жизнь</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Картинка с текстом</p>*/}
                {/*        </div>*/}


                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Анектоды</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Еда</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p className="m-0 ">Строительная компания "ВладЛох"</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Жизнь</p>*/}
                {/*        </div>*/}

                {/*        <div className="contents">*/}
                {/*            <img src={logo} className="rounded-3 " width="32" height="32"*/}
                {/*                 alt=""/>*/}
                {/*            <p>Картинка с текстом</p>*/}
                {/*        </div>*/}


                {/*    </div>*/}
                {/*</div>*/}


                <div className="col col-12 d-flex overflow-hidden flex-column h-100">



                    <Scrollable>
                        <div className="del">

                        </div>

                        <div className="del">

                        </div>

                        <div className="del">

                        </div>

                        <div className="del">

                        </div>

                        <div className="del">

                        </div>

                        <div className="paginator">

                        </div>

                    </Scrollable>

                </div>

            </div>


        </main>
    )
}