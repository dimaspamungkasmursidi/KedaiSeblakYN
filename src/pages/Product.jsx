import React from "react";
import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import Menu from "../components/organisms/Products/Menu";

const Product = () => {
  return (
    <section>
      <Navbar />
      <Menu />
      <WhatsappButton />
    </section>
  );
};

export default Product;
