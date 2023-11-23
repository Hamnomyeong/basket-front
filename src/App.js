import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';
import React from 'react'
import Join from './pages/Join';
import Login from './pages/Login';
import Category from './components/Category';
import Detail from './pages/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Main' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Join' element={<Join />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Home' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
