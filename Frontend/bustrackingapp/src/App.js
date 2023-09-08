import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/register';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>


    </>
  );
}

export default App;
