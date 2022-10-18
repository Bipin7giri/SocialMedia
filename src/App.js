import React, { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './components/home/Profile';
import { useSelector } from 'react-redux';
import Register from './components/Register';
import Test from './components/messenger/Test';
import 'antd/dist/antd.css';
const App = () => {
  const auth = useSelector((state) => state.auth.isAtuhenticated);
  return (
    <div className='App'>
      {/* <Home /> */}
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/messenger'
          element={<Test />}
        />
      </Routes>
    </div>
  );
};

export default App;
