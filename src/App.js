import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from "../src/screens/Login"
import Home from "../src/screens/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App;
