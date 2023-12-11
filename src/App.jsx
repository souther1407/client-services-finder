import "./App.css";
import { Routes, Route } from "react-router-dom";
import FindAService from "./pages/FindAService/FindAService";
import DashboardAdmin from "./pages/dashboardAdmin/DashboardAdmin";
import Register from "./pages/Register/Register";
import ShowProfesionalByLink from "./pages/ShowProfesionalByLink/ShowProfesionalByLink";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FindAService />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:link" element={<ShowProfesionalByLink />} />
      <Route
        path={`/${import.meta.env.VITE_ADMIN_URL}`}
        element={<DashboardAdmin />}
      />
    </Routes>
  );
}

export default App;
