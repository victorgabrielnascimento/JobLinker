import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Match from './components/Match';
import Chat from './components/Chat';
import Menu from './components/Menu';
import Superior from './components/Superior';
import PerfilCandidato from './components/PerfilCandidato';


function App() {
  return (
    <div className="App">
      <Router>
      <Superior></Superior>
      <Routes>
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
