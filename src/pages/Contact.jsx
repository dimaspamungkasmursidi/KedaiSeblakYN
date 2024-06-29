import React from "react";
// import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import Maps from "../components/organisms/Contact/Maps";

const Contact = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <Maps />
      <WhatsappButton />
    </section>
  );
};

export default Contact;
