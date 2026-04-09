import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <AdminLayout>

      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      {orders.map(o => (
        <div key={o.id} className="bg-white p-3 mb-2 shadow">
          <p>Order ID: {o.id}</p>
          <p>Total: ₹{o.total_amount}</p>
          <p>Address: {o.address}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}

    </AdminLayout>
  );
};

export default Orders;