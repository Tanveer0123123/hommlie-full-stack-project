import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {

  const navigate = useNavigate();

  // 🔥 total items count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // 🔥 get auth data
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // 🔥 logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">

      {/* LEFT */}
      <div className="text-2xl font-bold text-green-700 cursor-pointer" onClick={() => navigate("/")}>
        Hommlie
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center gap-6">

        <div className="flex gap-4 text-gray-700 font-medium">
          <span className="cursor-pointer hover:text-green-600">Residential</span>
          <span className="cursor-pointer hover:text-green-600">Commercial</span>
          <span className="cursor-pointer hover:text-green-600">Product</span>
        </div>

        <input
          type="text"
          placeholder="Location"
          className="border rounded-md px-3 py-1 text-sm"
        />

        <input
          type="text"
          placeholder="Search services..."
          className="border rounded-md px-3 py-1 text-sm w-48"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* 🔥 अगर login nahi hai */}
        {!token ? (
          <span 
            onClick={() => navigate("/login")}
            className="cursor-pointer text-gray-700 hover:text-green-600"
          >
            Login
          </span>
        ) : (
          <>
            {/* USER INFO */}
            <span className="text-sm text-gray-600">
              {user.email}
            </span>

            {/* ADMIN LINK */}
            {user.role === "admin" && (
              <span 
                onClick={() => navigate("/admin")}
                className="cursor-pointer text-blue-600 font-medium"
              >
                Admin
              </span>
            )}

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        )}

        {/* CART */}
        <Link to="/cart" className="relative text-xl">
          🛒

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

      </div>

    </div>
  );
};

export default Navbar;