import "./App.css";
import { Routes, Route } from "react-router-dom";
import FindAService from "./pages/FindAService/FindAService";
import DashboardAdmin from "./pages/dashboardAdmin/DashboardAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FindAService />} />
      <Route path="/admin" element={<DashboardAdmin />} />
    </Routes>
  );
}

export default App;
