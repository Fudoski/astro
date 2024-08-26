import axios from "axios";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutMePage from "./components/about-me/AboutMePage";
import HomePage from "./components/home/HomePage";
import PersonalCabinetPage from "./components/cabinet/CabinetPage";
import ModulePage from "./components/modules/ModulePage";

// axios base configuration
axios.defaults.baseURL = "https://localhost:8443";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/cabinet" element={<PersonalCabinetPage />} />
      <Route
        path="/products/courses/:courseId/modules/:moduleId"
        element={<ModulePage />}
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
