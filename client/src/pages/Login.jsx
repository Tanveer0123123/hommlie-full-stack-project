import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("user"); 

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      const user = res.data.user;

     
      if (user.role !== type) {
        alert(`You are not a ${type}`);
        return;
      }

   
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-80">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <div className="flex mb-4">
          <button
            onClick={() => setType("user")}
            className={`w-1/2 py-1 ${type === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            User
          </button>

          <button
            onClick={() => setType("admin")}
            className={`w-1/2 py-1 ${type === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Admin
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2"
        >
          Login
        </button>

        <p className="mt-3 text-sm text-center">
          Don't have an account?
          <span 
            onClick={() => navigate("/register")} 
            className="text-blue-500 cursor-pointer ml-1"
          >
            Register
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;