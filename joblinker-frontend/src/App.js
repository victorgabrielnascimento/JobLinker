import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Match from './components/Match';
import Chat from './components/Chat';
import Menu from './components/Menu';
import Superior from './components/Superior';
import PerfilCandidato from './components/PerfilCandidato';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

import React, { useState } from 'react';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      <Router>
        <Superior></Superior>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route exact path="/" element={<Match/>}></Route>
            <Route path="/chat" element={<Chat/>}></Route>
            <Route path="/perfilcandidato" element={<PerfilCandidato/>}></Route>
          </Routes>
        <Menu></Menu>
      </Router>
    </div>
  );
}

export default App;
