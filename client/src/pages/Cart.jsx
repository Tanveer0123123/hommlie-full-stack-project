import React, { useEffect, useState } from "react";
import api from "../api";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/cart/1")
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  }, []);

  // total calculation
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(total * 0.05); // 5% tax
  const finalAmount = total + tax;

  const handleOrder = async () => {
    try {
      const orderData = {
        user_id: 1,
        total_amount: finalAmount,
        address: "Bhopal MP",
        items: cart
      };

      await api.post("/orders", orderData);

      alert("Order placed successfully");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="md:col-span-2 space-y-4">

          {/* Phone */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Send booking details to</h3>
            <p className="text-gray-600">+91 8084410021</p>
          </div>

          {/* Address */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Address</h3>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Select address
            </button>
          </div>

          {/* Payment */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Payment Method</h3>
            <p className="text-gray-500 text-sm">Cash / Online (later add)</p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleOrder}
            className=" cursor-pointer w-full bg-blue-700 text-white py-3 rounded text-lg font-semibold"
          >
            BOOK AND PAY →
          </button>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4">

          {/* Cart Items */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">Cart Summary</h3>

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2 border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.quantity} Qty</p>
                </div>
                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

          </div>

          {/* Price Summary */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">Payment Summary</h3>

            <div className="flex justify-between text-gray-600">
              <span>Item Total</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Taxes & Fee</span>
              <span>₹{tax}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{finalAmount}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;