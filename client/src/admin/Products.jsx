import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";
import { Plus, Trash2, Package, Tag, IndianRupee } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    api.get("/products").then(res => setProducts(res.data));
  };

  const addProduct = async () => {
    try {
      if (!name || !price) return alert("Please fill all fields");
      await api.post("/products", { name, price });
      alert("Product Added Successfully");
      fetchProducts();
      setName("");
      setPrice("");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  return (
    <AdminLayout>
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#0a1f44] tracking-tight flex items-center gap-3">
          <Package className="text-[#0071bc]" size={28} /> Product Inventory
        </h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your service listings</p>
      </div>

      {/* Add Product Card */}
      <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 mb-8">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Add New Product</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Product Name" 
              className="w-full bg-[#f9fafb] border border-gray-100 p-4 pl-12 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#0071bc] focus:bg-white transition-all"
            />
          </div>
          <div className="relative md:w-48">
            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              placeholder="Price" 
              type="number"
              className="w-full bg-[#f9fafb] border border-gray-100 p-4 pl-12 rounded-xl text-sm font-bold text-[#0a1f44] outline-none focus:border-[#0071bc] focus:bg-white transition-all"
            />
          </div>
          <button 
            onClick={addProduct} 
            className="bg-[#004d2c] hover:bg-[#003d22] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 gap-3">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Active Products ({products.length})</h3>
        {products.length === 0 ? (
          <div className="bg-white p-10 rounded-[24px] text-center border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold italic text-sm">No products found. Add your first service above.</p>
          </div>
        ) : (
          products.map(p => (
            <div 
              key={p.id} 
              className="flex justify-between items-center bg-white p-5 rounded-[20px] shadow-sm border border-gray-50 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#0071bc]">
                  <Package size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-[#0a1f44] uppercase text-sm tracking-tight">{p.name}</span>
                  <span className="text-sm font-black text-[#0071bc]">₹{p.price}</span>
                </div>
              </div>
              <button 
                onClick={() => deleteProduct(p.id)} 
                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                title="Delete Product"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default Products;