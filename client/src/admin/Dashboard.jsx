import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";
import { 
  ShoppingBag, 
  IndianRupee, 
  Package, 
  Users, 
  TrendingUp,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
    api.get("/admin/stats")
      .then(res => setStats(res.data));

   
    api.get("/admin/orders")
      .then(res => setOrders(res.data));
  }, []);

  const statCards = [
    { title: "Total Orders", value: stats.orders || 0, icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Total Revenue", value: `₹${stats.revenue || 0}`, icon: IndianRupee, color: "text-green-600", bg: "bg-green-50" },
    { title: "Total Products", value: stats.products || 0, icon: Package, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Total Users", value: stats.users || 0, icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <AdminLayout>
      
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#0a1f44] tracking-tight">Dashboard Overview</h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Welcome back to Hommlíe Admin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                <card.icon size={24} />
              </div>
              <TrendingUp size={16} className="text-gray-300" />
            </div>
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{card.title}</h3>
            <p className="text-2xl font-black text-[#0a1f44]">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="text-[#0071bc]" size={20} />
            <h3 className="font-black text-[#0a1f44] uppercase text-sm tracking-tight">Recent Transactions</h3>
          </div>
          <button className="text-[10px] font-black text-[#0071bc] uppercase tracking-widest hover:underline">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fcfdfe] text-gray-400 text-[10px] font-black uppercase tracking-[0.15em]">
                <th className="p-5 border-b border-gray-50">Order ID</th>
                <th className="p-5 border-b border-gray-50">Customer & Mobile</th>
                <th className="p-5 border-b border-gray-50 text-center">Items</th>
                <th className="p-5 border-b border-gray-50">Address</th>
                <th className="p-5 border-b border-gray-50">Amount</th>
                <th className="p-5 border-b border-gray-50">Date</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-20 text-gray-400 font-bold italic">
                    No orders found in the database.
                  </td>
                </tr>
              ) : (
                orders.slice(0, 6).map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-5 border-b border-gray-50 font-black text-[#0071bc]">#{o.id}</td>
                    <td className="p-5 border-b border-gray-50">
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0a1f44]">{o.customer_name || "N/A"}</span>
                        <span className="text-[10px] text-gray-400 font-bold">{o.mobile || "N/A"}</span>
                      </div>
                    </td>
                    <td className="p-5 border-b border-gray-50 text-center">
                      <span className="bg-blue-50 text-[#0071bc] px-3 py-1 rounded-lg font-black text-[10px]">
                        {o.total_items || "0"}
                      </span>
                    </td>
                    <td className="p-5 border-b border-gray-50 text-gray-500 text-xs font-medium max-w-[200px] truncate">
                      {o.address || "N/A"}
                    </td>
                    <td className="p-5 border-b border-gray-50">
                      <span className="font-black text-[#0a1f44]">₹{o.total_amount}</span>
                    </td>
                    <td className="p-5 border-b border-gray-50 text-gray-400 font-bold text-[11px]">
                      {new Date(o.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;