import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import { useState } from 'react';
import Login from './Component/Login';
import { useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import { addTask } from './Redux/ReducerTask';


function App() {

  const dispatch = useDispatch()




  return (
    <div className="App">
    
    <BrowserRouter>
    

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
