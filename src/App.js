import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
