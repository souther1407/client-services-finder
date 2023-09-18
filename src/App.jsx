import "./App.css";
import { Routes, Route } from "react-router-dom";
import FindAService from "./pages/FindAService/FindAService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FindAService />} />
    </Routes>
  );
}

export default App;
