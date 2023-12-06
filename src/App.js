import {  Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Home from './pages/Home';
import React from 'react'
import Join from './pages/Join';
import Login from './pages/Login';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Search from './pages/Search';
import SearchFail from './pages/SearchFail';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Join2 from './pages/Join2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Join' element={<Join />} />
        <Route path='/Join2' element={<Join2 />} />
        <Route path='/Mypage' element={<Mypage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/SearchFail' element={<SearchFail />} />
        <Route path='/Detail' element={<Detail />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
