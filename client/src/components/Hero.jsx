import React, { useEffect, useState } from "react";
import api from "../api";
import heroimg from "../assets/hommlie-hero-img.jpeg";
import { User, Phone, PhoneCall } from "lucide-react";

const Hero = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 gap-8 lg:gap-12 ">

      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1f44] mb-6 tracking-tight text-center lg:text-left">
          What pest problem are you facing?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="group border border-gray-100 bg-white p-4 md:p-6 rounded-2xl cursor-pointer shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-center flex flex-col items-center justify-center gap-2"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <span className="text-blue-600 text-lg">🪳</span>
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
        <div className="relative group overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src={heroimg}
            alt="Hero Banner"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-end gap-4">

          {/* FULL NAME */}
          <div className="w-full flex-1">
            <label className="text-[10px] font-black text-[#4a6b8a] uppercase tracking-wider mb-1.5 ml-1 block">
              Full Name
            </label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Ex: John Doe"
                className="w-full bg-[#f8fafc] border-none rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium outline-none focus:ring-1 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* MOBILE NUMBER */}
          <div className="w-full flex-1">
            <label className="text-[10px] font-black text-[#4a6b8a] uppercase tracking-wider mb-1.5 ml-1 block">
              Mobile Number
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="10-digit number"
                className="w-full bg-[#f8fafc] border-none rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium outline-none focus:ring-1 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full md:w-auto bg-[#0061a8] hover:bg-[#00508c] text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-200 shrink-0">
            CALL BACK <PhoneCall size={16} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;