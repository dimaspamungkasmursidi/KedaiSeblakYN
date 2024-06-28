import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn, CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { TbBrandShopee } from "react-icons/tb";
import Title from "../../atoms/Text/Title";

const contactDetails = {
  address:
    "Srigading, Timur Pom Plosokandang, Kec. Kedungwaru, Kab. Tulungagung, Jawa Timur, 66229.",
  whatsapp1: "085927450198",
  whatsapp2: "085143107896",
  instagram: "@kedaiseblak.yn",
  shopee: "Kedai Seblak YN",
};

const Contact = () => {
  return (
    <section className="py-10 px-6">
      <Title>Kontak Kami</Title>
      <motion.div
        className="flex flex-col justify-center items-center mt-8 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Map Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.637509327007!2d111.93223712309594!3d-8.079826870815208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e3e39492f12d%3A0x7a9d4da2023c369c!2sKedai%20Pedas%20YN!5e0!3m2!1sen!2sid!4v1594812434715!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="flex items-center justify-center py-2 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center px-2 gap-4 border rounded-xl md:p-4">
            <CiLocationOn className="w-28 h-28 md:w-14 md:h-14" />
            <p className="font-londrina">{contactDetails.address}</p>
          </div>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-londrina tracking-wider mt-4 mb-2">
            Detail Kontak Klik
          </h2>

          {/* Contact Details */}
          <div className="md:flex border p-2 rounded-lg">
            <a href={`https://wa.me/${contactDetails.whatsapp1}`}>
              <div className="flex items-center justify-center p-2 gap-4">
                <PiWhatsappLogoThin className="w-12 h-12" />
                <div>
                  <p className="text-lg font-londrina tracking-wider">
                    Delivery Order
                  </p>
                  <p className="">{contactDetails.whatsapp1}</p>
                </div>
              </div>
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp2}`}>
              <div className="flex items-center justify-center p-2 gap-4">
                <PiWhatsappLogoThin className="w-12 h-12" />
                <div>
                  <p className="text-lg font-londrina tracking-wider">
                    Seblak Instant
                  </p>
                  <p className="">{contactDetails.whatsapp2}</p>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/kedaiseblak.yn/">
              <div className="flex items-center justify-center p-2 gap-4">
                <CiInstagram className="w-12 h-12" />
                <p className="text-lg font-londrina tracking-wider">
                  {contactDetails.instagram}
                </p>
              </div>
            </a>
            <a href="https://shopee.co.id/kedaiseblakyn29">
              <div className="flex items-center justify-center p-2 gap-4">
              <TbBrandShopee className="w-12 h-12" />
                <p className="text-lg font-londrina tracking-wider">
                  {contactDetails.shopee}
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
