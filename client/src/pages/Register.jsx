import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Registered Successfully");
      navigate("/login");

    } catch (err) {
      alert("Registration failed");
      console.log(err);
    }
  };

  return (
  
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#a7f3d0] via-[#5eead4] to-[#134e4a] px-4">

      {/* Registration Card */}
      <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[24px] shadow-2xl w-full max-w-[420px]">
        
        {/* Brand Identity */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-10 h-10 bg-[#004d2c] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
               H
             </div>
             <span className="text-3xl font-black text-[#004d2c] tracking-tighter">Hommlíe</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Create your account</p>
        </div>

        <h2 className="text-sm font-black text-gray-700 mb-8 text-center uppercase tracking-widest leading-relaxed">
          Join your hygiene partner
        </h2>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#004d2c] focus:bg-white transition-all shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#004d2c] focus:bg-white transition-all shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#004d2c] focus:bg-white transition-all shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleRegister}
            className="w-full bg-[#004d2c] hover:bg-[#003d22] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            Register <UserPlus size={18} />
          </button>
        </div>

        {/* Login Redirect Link */}
        <p className="text-xs font-bold text-gray-400 mt-8 text-center uppercase tracking-tight">
          Already have an account? 
          <span 
            className="text-[#004d2c] hover:underline cursor-pointer ml-1 font-black"
            onClick={() => navigate("/login")}
          >
            Login Here
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;