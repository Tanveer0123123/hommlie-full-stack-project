import React, { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "./AdminLayout";

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

  // const addProduct = () => {
  //   api.post("/products", { name, price })
  //     .then(() => {
  //       fetchProducts();
  //       setName("");
  //       setPrice("");
  //     });
  // };

  const addProduct = async () => {
    try {
      await api.post("/products", { name, price });

      alert("Product Added");

      fetchProducts();
      setName("");
      setPrice("");

    } catch (err) {
      console.log(err);
    }
  };

  // const deleteProduct = (id) => {
  //   api.delete(`/products/${id}`).then(fetchProducts);
  // };

  const deleteProduct = async (id) => {
  if (window.confirm("Delete this product?")) {
    await api.delete(`/products/${id}`);
    fetchProducts();
  }
};

  return (
    <AdminLayout>

      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* Add Product */}
      <div className="flex gap-2 mb-4">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2" />
        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="border p-2" />
        <button onClick={addProduct} className="bg-green-600 text-white px-4">Add</button>
      </div>

      {/* List */}
      {products.map(p => (
        <div key={p.id} className="flex justify-between bg-white p-3 mb-2 shadow">
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => deleteProduct(p.id)} className="text-red-500">Delete</button>
        </div>
      ))}

    </AdminLayout>
  );
};

export default Products;