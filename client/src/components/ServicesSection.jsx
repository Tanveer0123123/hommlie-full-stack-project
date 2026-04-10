import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const ServiceSection = ({ selectedProduct, goBack, cart, setCart }) => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
    fetchCart();
  }, [selectedProduct]);

  // FETCH CART
  const fetchCart = () => {
    api.get("/cart/1")
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  };

  // ADD TO CART
  const addToCart = (id) => {
    api.post("/cart", {
      user_id: 1,
      product_id: id,
      quantity: 1
    }).then(fetchCart);
  };

  // TOTAL PRICE
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // UPDATE QUANTITY
  const updateQuantity = (id, qty) => {
    if (qty < 0) return;

    if (qty === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
      removeItem(id);
      return;
    }

    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    );

    setCart(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    api.delete(`/cart/${id}`)
      .then(fetchCart);
  };

  return (
    <div className="p-4">

      {/* BACK BUTTON */}
      <button
        onClick={goBack}
        className="mb-4 text-blue-500"
      >
        ← Back
      </button>

      <div className="flex gap-4">

        {/* LEFT */}
        <div className="w-1/4 bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-4">Service</h2>

          {product && (
            <div className="p-2 border rounded bg-gray-100">
              {product.name}
            </div>
          )}
        </div>

        {/* CENTER (DETAIL) */}
        <div className="w-2/4 bg-white p-4 shadow rounded">

          {product ? (
            <>
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <img
                src={product.image}
                alt={product.name}
                className="my-4 rounded w-full"
              />

              <p className="text-gray-600">
                {product.description}
              </p>

              <p className="font-bold mt-3 text-lg">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product.id)}
                className="bg-blue-500 text-white px-5 py-2 mt-4 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </>
          ) : (
            <p>No product selected</p>
          )}

        </div>

        {/* RIGHT (CART) */}
        <div className="w-1/4 bg-white p-4 shadow rounded">

          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="mb-4 border-b pb-3">

                  <div className="flex justify-between font-medium">
                    <span className="uppercase text-sm">
                      {item.name}
                    </span>
                    <span>₹{item.price}</span>
                  </div>

                  <p className="text-blue-500 text-sm">1 BHK</p>

                  <div className="flex items-center gap-3 mt-2">

                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                  </div>

                </div>
              ))}

              {/* TOTAL */}
              <div className="flex justify-between text-gray-600 mt-4">
                <span>Subtotal</span>
                <span>₹{getTotal()}</span>
              </div>

              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>₹{getTotal()}</span>
              </div>

              {/* CHECKOUT */}
              <Link to="/cart">
                <button className="bg-blue-600 text-white w-full py-3 rounded mt-4 hover:bg-blue-700">
                  Checkout Now →
                </button>
              </Link>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default ServiceSection;