import axios from "axios";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutMePage from "./components/about-me/AboutMePage";
import HomePage from "./components/home/HomePage";
import PersonalCabinetPage from "./components/cabinet/CabinetPage";

// axios base configuration
axios.defaults.baseURL = "https://localhost:8443";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/cabinet" element={<PersonalCabinetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
