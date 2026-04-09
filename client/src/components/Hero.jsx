import React from "react";

const categories = [
  { name: "Bedbugs Control", id: 1 },
  { name: "Cockroach Control", id: 2 },
  { name: "Termite Control", id: 1 }
];

const Hero = ({ onSelectCategory }) => {
  return (
    <div className="flex p-6 gap-6">

      {/* LEFT */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          What pest problem are you facing?
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {categories.map((c, index) => (
            <div 
              key={index}
              onClick={() => onSelectCategory(c.id)}
              className="border p-4 rounded cursor-pointer hover:bg-gray-100 text-center"
            >
              {c.name}
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