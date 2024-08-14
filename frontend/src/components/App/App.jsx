import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Route, Routes, Link } from 'react-router-dom';

import Header from '../Header/Header'
import Main from '../MainPage/Main/Main'
import Post from '../MainPage/Post/Post';


function App() {

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/posts" element={<Post />} />
            </Routes>

        </>
    );
}



export default App;
