import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

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
   
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#a7f3d0] via-[#5eead4] to-[#134e4a] px-4">

      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-[20px] shadow-2xl w-full max-w-[420px] transition-all">
        
        {/* Brand Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-10 h-10 bg-[#004d2c] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
               H
             </div>
             <span className="text-3xl font-black text-[#004d2c] tracking-tighter">Hommlíe</span>
          </div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Your Hygiene Partner</p>
        </div>

        <h2 className="text-sm font-black text-gray-700 mb-6 text-center uppercase tracking-widest">
          Sign in to start your session
        </h2>

        <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
          <button
            onClick={() => setType("user")}
            className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${
              type === "user" ? "bg-white text-[#004d2c] shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            USER
          </button>
          <button
            onClick={() => setType("admin")}
            className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${
              type === "admin" ? "bg-white text-[#004d2c] shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            ADMIN
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="group">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#004d2c] focus:bg-white transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="group">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#004d2c] focus:bg-white transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 mb-6 px-1">
          <input type="checkbox" id="remember" className="rounded border-gray-300 text-[#004d2c] focus:ring-[#004d2c]" />
          <label htmlFor="remember" className="text-xs font-bold text-gray-500 cursor-pointer">Remember me</label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#004d2c] hover:bg-[#003d22] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 mb-6"
        >
          Login <LogIn size={16} />
        </button>

        {/* Footer Link */}
        <p className="text-xs font-bold text-gray-400 text-center uppercase tracking-tight">
          Don't have an account? 
          <span 
            onClick={() => navigate("/register")} 
            className="text-[#004d2c] hover:underline cursor-pointer ml-1"
          >
            Register Now
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;