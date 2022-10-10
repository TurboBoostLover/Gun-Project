import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from "../src/screens/Login"
import Home from "../src/screens/Home"
import Armory from "../src/screens/Armory"
import Range from "../src/screens/Range"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/range" element={<Range />} />
      <Route path="/armory" element={<Armory />} />
      </Routes>
  );
}

export default App;
