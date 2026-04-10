import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // STATS
    api.get("/admin/stats")
      .then(res => setStats(res.data));

    // RECENT ORDERS
    api.get("/admin/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <AdminLayout>

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* STATS CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-8">

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Orders</h3>
          <p className="text-xl font-bold">{stats.orders || 0}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Revenue</h3>
          <p className="text-xl font-bold">₹{stats.revenue || 0}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Products</h3>
          <p className="text-xl font-bold">{stats.products || 0}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Users</h3>
          <p className="text-xl font-bold">{stats.users || 0}</p>
        </div>

      </div>


      <div className="bg-white p-4 rounded shadow">

        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>

        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            {/* HEADER */}
            <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <tr>
                <th className="p-3">Order #</th>
                <th className="p-3">Products</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Address</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Total</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.slice(0, 6).map((o) => ( // only recent 5–6 orders
                  <tr key={o.id} className="border-b hover:bg-gray-50">

                    <td className="p-3 font-medium">{o.id}</td>

                    <td className="p-3">
                      {o.total_items || "-"}
                    </td>

                    <td className="p-3">
                      {o.customer_name || "N/A"}
                    </td>
                    <td className="p-3">
                      {o.address || "N/A"}
                    </td>

                    <td className="p-3">
                      {o.mobile || "N/A"}
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{o.total_amount}
                    </td>

                    <td className="p-3">
                      {new Date(o.created_at).toLocaleDateString()}
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