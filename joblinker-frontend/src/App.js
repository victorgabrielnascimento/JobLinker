import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Match from "./components/Match";
import MatchEmpresa from "./components/MatchEmpresa";
import Chat from "./components/Chat";
import ChatEmpresa from "./components/ChatEmpresa";
import Menu from "./components/Menu";
import Superior from "./components/Superior";
import PerfilCandidato from "./components/PerfilCandidato";
import PerfilEmpresa from "./components/PerfilEmpresa";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Pro from "./components/Pro";
import ProEmpresa from "./components/ProEmpresa";

import React, { useState } from "react";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Superior></Superior>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route exact path="/" element={<Match />}></Route>
          <Route exact path="/2" element={<MatchEmpresa />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/chat2" element={<ChatEmpresa />}></Route>
          <Route path="/perfilcandidato" element={<PerfilCandidato />}></Route>
          <Route path="/perfil2" element={<PerfilEmpresa />}></Route>
          <Route path="/pro" element={<Pro />}></Route>
          <Route path="/pro2" element={<ProEmpresa />}></Route>
        </Routes>
        <Menu></Menu>
      </Router>
    </div>
  );
}

export default App;
