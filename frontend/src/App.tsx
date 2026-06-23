import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./components/Login"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Routes using AdminLayout */}
        <Route element={<AdminLayout />}>
          <Route path="/" element={user ? <Dashboard /> :<Navigate to="/login" replace />} />
          <Route path="/users" element={user ?  <Users /> : <Navigate to="/login" replace />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;