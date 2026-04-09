import React, { useEffect, useState } from "react";
import api from "../api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/admin/orders/${id}`, { status });

    const res = await api.get("/admin/orders");
    setOrders(res.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Orders</h2>

      {orders.map(order => (
        <div key={order.id} className="border p-3 my-2 flex justify-between">

          <div>
            <p>ID: {order.id}</p>
            <p>User: {order.name}</p>
            <p>Amount: ₹{order.total_amount}</p>
            <p>Status: {order.status}</p>
          </div>

          <div>
            <button
              onClick={() => updateStatus(order.id, "completed")}
              className="bg-green-500 text-white px-2 py-1 mr-2"
            >
              Complete
            </button>

            <button
              onClick={() => updateStatus(order.id, "pending")}
              className="bg-yellow-500 text-white px-2 py-1"
            >
              Pending
            </button>
          </div>

        </div>
      ))}

    </div>
  );
};

export default AdminOrders;