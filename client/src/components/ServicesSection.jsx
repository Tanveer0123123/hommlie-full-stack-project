import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const ServiceSection = ({ category, goBack, cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    // FILTER PRODUCTS BY CATEGORY
    api.get(`/products?category_id=${category}`)
      .then(res => {
        setProducts(res.data);
        setSelectedProduct(res.data[0]);
      });

    fetchCart();
  }, [category]);

  const fetchCart = () => {
  api.get("/cart/1")
    .then(res => setCart(res.data)); 
}

  const addToCart = (id) => {
    api.post("/cart", {
      user_id: 1,
      product_id: id,
      quantity: 1
    }).then(fetchCart);
  };

  // Total calculation
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Quantity update (basic frontend version)
  const updateQuantity = (id, qty) => {
    if (qty < 0) return;


    if (qty === 0) {
      // 🔥 UI se turant remove karo
      setCart(prev => prev.filter(item => item.id !== id));

      // 🔥 Backend se bhi delete karo
      removeItem(id);
      console.log("Deleting ID:", id);

      return;
    }

    // normal update
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    );

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    console.log("Deleting:", id);

    api.delete(`/cart/${id}`)
      .then(() => {
        fetchCart(); // DB se fresh data
      });
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
          <h2 className="font-bold mb-4">Services</h2>


          {products.map(p => (
            <div
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className="p-2 border mb-2 cursor-pointer hover:bg-gray-100 rounded"
            >
              {p.name}
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="w-2/4 bg-white p-4 shadow rounded">
          {selectedProduct && (
            <>
              <h2 className="text-xl font-bold">
                {selectedProduct.name}
              </h2>

              <img
                src={selectedProduct.image}
                className="my-4 rounded"
              />

              <p>{selectedProduct.description}</p>

              <p className="font-bold mt-2">
                ₹{selectedProduct.price}
              </p>

              <button
                onClick={() => addToCart(selectedProduct.id)}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
              >
                Add
              </button>
            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="w-1/4 bg-white p-4 shadow rounded">

          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="mb-4 border-b pb-3">

                  {/* Product Name + Price */}
                  <div className="flex justify-between font-medium">
                    <span className="uppercase text-sm">
                      {item.name}
                    </span>
                    <span>₹{item.price}</span>
                  </div>

                  {/* Variant */}
                  <p className="text-blue-500 text-sm">1 BHK</p>

                  {/* Quantity Controls */}
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

              {/* Subtotal */}
              <div className="flex justify-between text-gray-600 mt-4">
                <span>Subtotal</span>
                <span>₹{getTotal()}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total Amount</span>
                <span>₹{getTotal()}</span>
              </div>

              {/* Checkout */}
              <Link to="/cart">
              <button className="bg-blue-600 text-white w-full py-3 rounded mt-4 hover:bg-blue-700 cursor-pointer">
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