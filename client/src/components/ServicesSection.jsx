import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, ShoppingCart, ShieldCheck } from "lucide-react";

const ServiceSection = ({ selectedProduct, goBack, cart, setCart }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
    fetchCart();
  }, [selectedProduct]);

  const fetchCart = () => {
    api.get("/cart/1")
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  };

  const addToCart = (id) => {
    api.post("/cart", {
      user_id: 1,
      product_id: id,
      quantity: 1
    }).then(fetchCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

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

  const removeItem = (id) => {
    api.delete(`/cart/${id}`).then(fetchCart);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-[#f8fafc] min-h-screen">
      
      <button
        onClick={goBack}
        className="flex items-center gap-2 mb-6 text-[#0071bc] font-bold hover:underline transition-all"
      >
        <ArrowLeft size={20} /> Back to Services
      </button>

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="hidden lg:block w-1/4">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-[24px]">
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Service Category</h2>
            {product && (
              <div className="p-3 border-l-4 border-[#0071bc] bg-blue-50 text-[#0071bc] font-bold rounded-r-lg">
                {product.name}
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-2/4">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-[32px]">
            {product ? (
              <>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-black text-[#0a1f44]">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md text-[10px] font-bold">
                    <ShieldCheck size={14} /> VERIFIED
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {product.description || "Professional pest control service ensuring a hygienic environment for your family."}
                </p>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Starting From</p>
                    <p className="text-2xl font-black text-[#0a1f44]">₹{product.price}</p>
                  </div>
                  
                  <button
                    onClick={() => addToCart(product.id)}
                    className="bg-[#0071bc] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#005a96] shadow-lg shadow-blue-100 transition-all active:scale-95"
                  >
                    <Plus size={18} /> Add to Cart
                  </button>
                </div>
              </>
            ) : (
              <div className="py-20 text-center text-gray-400">Select a service to view details</div>
            )}
          </div>
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-[24px] sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingCart size={20} className="text-[#0a1f44]" />
              <h2 className="text-lg font-black text-[#0a1f44]">Cart Summary</h2>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 text-sm">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="mb-4 bg-[#f8fafc] p-3 rounded-xl border border-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-[#334e68] uppercase truncate w-32">
                          {item.name}
                        </span>
                        <span className="text-sm font-black text-[#0a1f44]">₹{item.price * item.quantity}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#0071bc] font-bold">1 BHK Service</span>
                        
                        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-2 py-1">
                          <button
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TOTALS */}
                <div className="mt-6 pt-4 border-t border-dashed border-gray-200 space-y-2">
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{getTotal()}</span>
                  </div>
                  <div className="flex justify-between text-[#0a1f44] text-lg font-black pt-2">
                    <span>Total</span>
                    <span>₹{getTotal()}</span>
                  </div>
                </div>

                <Link to="/cart">
                  <button className="bg-[#004d2c] text-white w-full py-4 rounded-2xl mt-6 font-black text-sm tracking-widest hover:bg-[#003d22] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-50">
                    CHECKOUT NOW <ShoppingCart size={16} />
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;