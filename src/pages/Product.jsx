import React from "react";
import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import Menu from "../components/organisms/Products/Menu";
import Footer from "../components/organisms/Footer/Footer";

const Product = () => {
  return (
    <section>
      <Navbar />
      <Menu />
      <Footer />
      <WhatsappButton />
    </section>
  );
};

export default Product;
