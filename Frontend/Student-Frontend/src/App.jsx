import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StudentsList from "./pages/StudentsList";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/students" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
