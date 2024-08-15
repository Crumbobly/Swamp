import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Header from '../Header/Header'
import Main from '../MainPage/Main/Main'
import Posts from '../MainPage/Posts/Posts';


function App() {

    return (
        <BrowserRouter>

            <Header>

            </Header>


            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>

        </BrowserRouter>
    );
}



export default App;
