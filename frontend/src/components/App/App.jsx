import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import '../../assets/css/Scrollbar.css'
import '../../assets/css/Tooltip.css'
import '../../assets/css/BootstrapMod.scss'

import {Route, Routes, BrowserRouter} from 'react-router-dom';


import Header from '../Header/Header'
import Main from '../Pages/MainPage/Main/Main'
import Posts from '../Pages/PostsPage/Posts';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'
import Login from "../Pages/AuthorizationPages/Login/Login";
import Registration from "../Pages/AuthorizationPages/Registration/Registration";


function App() {

    return (

        <BrowserRouter>

            <Header>

            </Header>


            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reg" element={<Registration/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>



        </BrowserRouter>

    );
}


export default App;
