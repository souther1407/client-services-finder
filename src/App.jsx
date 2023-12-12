import "./App.css";
import { Routes, Route } from "react-router-dom";
import FindAService from "./pages/FindAService/FindAService";
import DashboardAdmin from "./pages/dashboardAdmin/DashboardAdmin";
import Register from "./pages/Register/Register";
import ShowProfesionalByLink from "./pages/ShowProfesionalByLink/ShowProfesionalByLink";
import {
  FIND_SERVICE,
  GET_PROFESIONAL_BY_LINK,
  REGISTER,
} from "./utils/constants/routes";
function App() {
  return (
    <Routes>
      <Route path={FIND_SERVICE} element={<FindAService />} />
      <Route path={REGISTER} element={<Register />} />
      <Route
        path={GET_PROFESIONAL_BY_LINK}
        element={<ShowProfesionalByLink />}
      />
      <Route
        path={`/${import.meta.env.VITE_ADMIN_URL}`}
        element={<DashboardAdmin />}
      />
    </Routes>
  );
}

export default App;
