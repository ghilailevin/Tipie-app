import Home from './componentes/Home';
import Login from './componentes/Login'
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
