import React, { useState } from "react";
import {login} from "../services/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

     try {
      const response = await login({
        email,
        password,
      });

      toast.success("Login successful");

      // Optional: store user info
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

    //   navigate("/users");
    window.location.href = "/";
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="card shadow-lg border-0"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Admin Login</h2>
            <p className="text-muted">
              Sign in to continue
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-3 text-muted">
            © 2026 Glass World & Aluminium
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;