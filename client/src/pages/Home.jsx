import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServicesSection";

const Home = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Navbar cart={cart} />

      {!selectedCategory ? (
        <Hero onSelectCategory={setSelectedCategory} />
      ) : (
        <ServiceSection 
          category={selectedCategory}
          goBack={() => setSelectedCategory(null)}
          cart={cart}
          setCart={setCart}
        />
      )}
    </>
  );
};

export default Home;