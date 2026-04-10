import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12 font-sans text-gray-600 border-t border-gray-100">
      {/* Social Icons FontAwesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Main Grid Section - Matches the 6-gap and structure of your Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-[#006838] rounded flex items-center justify-center">
               <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold text-[#006838]">Hommlíe</span>
              <span className="text-[10px] text-gray-400">Your Hygiene Partner</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            One click to transform your home into a sparkling haven with our professional cleaning services.
          </p>
          <div className="flex space-x-5 text-gray-400">
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-[#006838]"></i>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-[#006838]"></i>
            <i className="fa-brands fa-twitter cursor-pointer hover:text-[#006838]"></i>
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-[#006838]"></i>
            <i className="fa-brands fa-youtube cursor-pointer hover:text-[#006838]"></i>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#006838]">Home</a></li>
            <li><a href="#" className="hover:text-[#006838]">About us</a></li>
            <li><a href="#" className="hover:text-[#006838]">Services</a></li>
            <li><a href="#" className="hover:text-[#006838]">Partner us</a></li>
            <li><a href="#" className="hover:text-[#006838]">Contact us</a></li>
          </ul>
        </div>

        {/* Our Brands */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Our Brands</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#006838]">Hommlie</a></li>
            <li><a href="#" className="hover:text-[#006838]">Hommlie B2B</a></li>
            <li><a href="#" className="hover:text-[#006838]">Hommlie Shop</a></li>
            <li><a href="#" className="hover:text-[#006838]">Hoy Smart</a></li>
            <li><a href="#" className="hover:text-[#006838]">RoachX</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#006838]">Community</a></li>
            <li><a href="#" className="hover:text-[#006838]">Blogs</a></li>
            <li><a href="#" className="hover:text-[#006838]">Women Empowerment</a></li>
            <li><a href="#" className="hover:text-[#006838]">B2B Services</a></li>
            <li><a href="#" className="hover:text-[#006838]">Newsletter</a></li>
          </ul>
        </div>

        {/* Locations & Contact */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 mb-2">Locations & Contact</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Bangalore', 'Hyderabad', 'Chennai', 'Delhi'].map((city) => (
              <span key={city} className="bg-gray-50 border border-gray-100 rounded-full px-2 py-1 text-[11px] text-center text-gray-600">
                {city}
              </span>
            ))}
          </div>
          <div className="pt-2 text-sm">
            <p className="text-blue-500 font-medium">reach@hommlie.com</p>
            <p className="font-bold">+91-6363865658</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 border p-1 rounded">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Hommlie" alt="QR" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1.5">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-7 cursor-pointer" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-7 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-6" />

      {/* Bottom Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 gap-4">
        <div className="text-center md:text-left">
          Copyright © <span className="font-medium">ADML TECHNOSERVICES PRIVATE LIMITED.</span> All Rights Reserved.
          <span className="ml-4 space-x-3">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </span>
        </div>
        <div className="flex items-center gap-1 text-[#006838] font-bold cursor-pointer">
          We are available in: 
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;