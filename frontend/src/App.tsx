import axios from "axios";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ComponentsPreview from "./pages/ComponentsPreview";
import HomePage from "./pages/Homepage";

// axios base configuration
axios.defaults.baseURL = "https://localhost:8443";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
