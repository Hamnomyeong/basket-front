import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Home from './pages/Home';
import React from 'react';
import Join from './pages/Join';
import Login from './pages/Login';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Search from './pages/Search';
import SearchFail from './pages/SearchFail';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Join2 from './pages/Join2';
import JoinDone from './pages/JoinDone';
import JoinSubmit from './pages/JoinSubmit';
import JoinIng from './pages/JoinIng';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const hideFooterPages = ['/', '/Join', '/Join2', '/Login', '/JoinIng', '/JoinSubmit', '/JoinDone'];

  return (
    <div className="App">
      <div className='App-wrap'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Join' element={<Join />} />
          <Route path='/Join2' element={<Join2 />} />
          <Route path='/JoinSubmit' element={<JoinSubmit />} />
          <Route path='/JoinIng' element={<JoinIng />} />
          <Route path='/JoinDone' element={<JoinDone />} />
          <Route path='/Mypage' element={<Mypage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/SearchFail' element={<SearchFail />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </div>

      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
