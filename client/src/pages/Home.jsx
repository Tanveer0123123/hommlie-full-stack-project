import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import ImpactSection from "../components/ImpactSection";

const Home = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar cart={cart} />

      {!selectedProduct ? (
        <Hero onSelectProduct={setSelectedProduct} />
      ) : (
        <ServiceSection 
          selectedProduct={selectedProduct}
          goBack={() => setSelectedProduct(null)}
          cart={cart}
          setCart={setCart}
        />
      )}
      <ImpactSection/>
      <Footer/>
    </>
  );
};

export default Home;