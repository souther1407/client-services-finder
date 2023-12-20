import "./App.css";
import { Routes, Route } from "react-router-dom";
import FindAService from "./pages/FindAService/FindAService";
import DashboardProfesionales from "./pages/DashboardProfesioanles/DashboardProfesionales";
import Register from "./pages/Register/Register";
import ShowProfesionalByLink from "./pages/ShowProfesionalByLink/ShowProfesionalByLink";
import Profile from "./pages/Profile/Profile";
import {
  FIND_SERVICE,
  GET_PROFESIONAL_BY_LINK,
  REGISTER,
  PROFILE,
} from "./utils/constants/routes";
function App() {
  return (
    <Routes>
      <Route path={FIND_SERVICE} element={<FindAService />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={PROFILE} element={<Profile />} />
      <Route
        path={GET_PROFESIONAL_BY_LINK}
        element={<ShowProfesionalByLink />}
      />
      <Route
        path={`/${import.meta.env.VITE_ADMIN_URL}`}
        element={<DashboardProfesionales />}
      />
    </Routes>
  );
}

export default App;
