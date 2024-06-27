import React from "react";
import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import OurTeam from "../components/organisms/About/OurTeam";

const About = () => {
  return (
    <section>
      <Navbar />
      <OurTeam />
      <WhatsappButton />
    </section>
  );
};

export default About;
