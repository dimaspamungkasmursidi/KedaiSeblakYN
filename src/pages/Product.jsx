import React, { useState } from "react";
import Menu from "../components/organisms/Products/Menu";
import Footer from "../components/organisms/Footer/Footer";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";

const Product = ({ addToCart }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  return (
    <section>
      <Menu addToCart={addToCart} onCardClick={handleCardClick} />
      <Footer />
      <WhatsappButton />
    </section>
  );
};

export default Product;
