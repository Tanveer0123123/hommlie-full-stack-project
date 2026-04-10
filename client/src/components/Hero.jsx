import React, { useEffect, useState } from "react";
import api from "../api";

const Hero = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex p-6 gap-6">

      {/* LEFT */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          What service are you looking for?
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <div 
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="border p-4 rounded cursor-pointer hover:bg-gray-100 text-center"
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt=""
          className="rounded w-full"
        />
      </div>

    </div>
  );
};

export default Hero;