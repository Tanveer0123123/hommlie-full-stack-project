import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";
import { ClipboardList, User, IndianRupee, Activity, CheckCircle, Clock } from "lucide-react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    api.get("/admin/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/orders/${id}`, { status });
      // Refreshing the list
      fetchOrders();
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <AdminLayout>
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#0a1f44] tracking-tight flex items-center gap-3">
          <ClipboardList className="text-[#0071bc]" size={28} /> Manage All Orders
        </h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">
          Review bookings and update service status
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orders.length === 0 ? (
          <div className="bg-white p-20 rounded-[32px] text-center border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold italic">No active orders found.</p>
          </div>
        ) : (
          orders.map(order => (
            <div 
              key={order.id} 
              className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition-all gap-6"
            >
              {/* Order Info Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
                  <p className="font-black text-[#0071bc]">#{order.id}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Customer</p>
                    <p className="text-sm font-bold text-[#0a1f44]">{order.name || "Guest User"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    <IndianRupee size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Billing</p>
                    <p className="text-sm font-black text-[#0a1f44]">₹{order.total_amount}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#0071bc]">
                    <Activity size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                      order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                <button
                  onClick={() => updateStatus(order.id, "completed")}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    order.status === "completed" 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-[#004d2c] text-white hover:bg-[#003d22] shadow-lg shadow-green-900/10 active:scale-95"
                  }`}
                  disabled={order.status === "completed"}
                >
                  <CheckCircle size={14} /> Complete
                </button>

                <button
                  onClick={() => updateStatus(order.id, "pending")}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    order.status === "pending" 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/10 active:scale-95"
                  }`}
                  disabled={order.status === "pending"}
                >
                  <Clock size={14} /> Pending
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;