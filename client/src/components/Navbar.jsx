import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-2 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0" onClick={() => navigate("/")}>
          <div className="w-10 h-10 bg-[#004d2c] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold text-[#004d2c] tracking-tight">Hommlíe</span>
            <span className="text-[10px] text-gray-400 font-medium tracking-tight whitespace-nowrap">Your Hygiene Partner</span>
          </div>
        </div>

        {/* DESKTOP CENTER NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center max-w-4xl px-8">
          <div className="flex gap-6 text-[15px] font-medium text-gray-500 whitespace-nowrap">
            <span className="cursor-pointer text-[#0071bc] border-b-2 border-[#0071bc] pb-1">Residential</span>
            <span className="cursor-pointer hover:text-gray-800 transition-colors">Commercial</span>
            <span className="cursor-pointer hover:text-gray-800 transition-colors">Product</span>
          </div>

          {/* Search Bar Desktop */}
          <div className="flex items-center bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-2 w-full max-w-lg shadow-sm">
            <div className="flex items-center gap-2 border-r border-gray-300 pr-4 shrink-0">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <input type="text" placeholder="Bangalore" className="bg-transparent text-sm font-medium text-gray-700 outline-none w-24" />
            </div>
            <div className="flex items-center gap-2 pl-4 w-full">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input type="text" placeholder="Search service..." className="bg-transparent text-sm text-gray-600 outline-none w-full" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Auth, Wallet, Cart) */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">

          <div className="hidden sm:flex items-center">
            {!token ? (
              <button onClick={() => navigate("/login")} className="font-bold text-gray-700 hover:text-[#004d2c] text-sm uppercase px-2">
                Login
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <div className="relative group py-2">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div className="text-gray-400 bg-gray-100 p-1.5 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <span className="hidden md:block text-xs font-bold text-gray-800 uppercase max-w-[100px] truncate">
                      {user.name || "User"}
                    </span>
                  </div>
                  <div className="absolute top-full right-0 w-40 bg-white shadow-xl border border-gray-100 rounded-lg py-2 hidden group-hover:block z-[100]">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 flex items-center gap-2">
                      LOGOUT
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Wallet Icon */}
          <div className="flex flex-col items-center group cursor-pointer border-l border-gray-100 pl-2 md:pl-4">
            <div className="bg-gray-50 p-2 rounded-xl border border-gray-50 group-hover:bg-gray-100">
              <svg className="w-5 h-5 text-[#2d3e50]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-gray-700 mt-0.5">₹100</span>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2.5 bg-gray-50 rounded-full border border-gray-50 hover:bg-gray-100 transition-all">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e31e24] text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 pb-4 space-y-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-3 font-medium text-gray-600">
            <span className="text-[#0071bc] font-bold">Residential</span>
            <span>Commercial</span>
            <span>Product</span>
          </div>

          {/* Mobile Search */}
          <div className="bg-gray-50 rounded-lg p-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search service..." className="bg-transparent w-full outline-none text-sm" />
          </div>

          {/* Mobile Login/Logout */}
          {!token ? (
            <button onClick={() => navigate("/login")} className="w-full bg-[#004d2c] text-white py-2 rounded-lg font-bold">LOGIN</button>
          ) : (
            <button onClick={handleLogout} className="w-full bg-red-50 text-red-500 py-2 rounded-lg font-bold">LOGOUT</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;