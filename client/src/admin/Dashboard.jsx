import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data));
  }, []);

  return (
    <AdminLayout>

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Orders</h3>
          <p className="text-xl">{stats.orders}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Revenue</h3>
          <p className="text-xl">₹{stats.revenue}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Products</h3>
          <p className="text-xl">{stats.products}</p>
        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;