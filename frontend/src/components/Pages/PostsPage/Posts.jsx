import './Posts.css';
import Scrollable from "../../Scrollable/Scrollable";
import React from "react";
import logo from '../../../assets/images/icons/images-svgrepo-com.svg';
import Navbar from "./Navbar/Navbar";

export default function Posts() {


    return (

        <main>

            <div className="row mx-2 mx-md-4 d-flex overflow-hidden flex-column h-100">

                <div className="d-flex overflow-hidden flex-column h-100">


                    <Scrollable>
                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="post">

                        </div>

                        <div className="paginator">

                        </div>

                    </Scrollable>

                </div>

            </div>


        </main>
    )
}