import axios from "axios";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMe";

// axios base configuration
axios.defaults.baseURL = "https://localhost:8443";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
