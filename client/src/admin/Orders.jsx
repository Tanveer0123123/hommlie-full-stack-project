import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";
import { ClipboardList, MapPin, IndianRupee, Clock, CheckCircle2 } from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <AdminLayout>
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#0a1f44] tracking-tight flex items-center gap-3">
          <ClipboardList className="text-[#0071bc]" size={28} /> Booking Requests
        </h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">
          Monitor and manage all customer service orders
        </p>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length === 0 ? (
          <div className="col-span-full bg-white p-20 rounded-[32px] text-center border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold italic">No bookings found in the records.</p>
          </div>
        ) : (
          orders.map((o) => (
            <div 
              key={o.id} 
              className="bg-white rounded-[28px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Card Header */}
              <div className="bg-[#fcfdfe] p-5 border-b border-gray-50 flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order ID</span>
                <span className="font-black text-[#0071bc]">#{o.id}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
               
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    <IndianRupee size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tight leading-none">Total Amount</p>
                    <p className="text-lg font-black text-[#0a1f44]">₹{o.total_amount}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#0071bc] mt-1">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tight leading-none">Service Address</p>
                    <p className="text-xs font-bold text-[#334e68] mt-1 leading-relaxed">
                      {o.address || "No address provided"}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Status</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                    o.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                  }`}>
                    {o.status || 'Pending'}
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#f8fafc] group-hover:bg-[#0071bc] group-hover:text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 text-gray-500">
                Update Status <CheckCircle2 size={14} />
              </button>
            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default Orders;