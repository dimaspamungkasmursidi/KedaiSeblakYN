import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Title from "../../atoms/Text/Title";

const contactDetails = {
  address: "Jl. Contoh Alamat No.123, Tulungagung, Jawa Timur",
  whatsapp: "+62 812-3456-7890",
  instagram: "@kedai_pedas_yn",
  email: "contact@kedaipedasyn.com",
  phone: "+62 341-123-456",
};

const Contact = () => {
  return (
    <section className="py-10 px-6">
      <Title>Contact Us</Title>
      <motion.div
        className="mt-8 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Map Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/place/Kedai+Pedas+YN/@-8.0798269,111.9322371,21z/data=!4m6!3m5!1s0x2e78e3e39492f12d:0x7a9d4da2023c369c!8m2!3d-8.0797027!4d111.932261!16s%2Fg%2F11rqv0nj0p?entry=ttu"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-londrina tracking-wider">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg">
              <HiLocationMarker className="text-4xl text-primary mb-2" />
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p>{contactDetails.address}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg">
              <FaPhone className="text-4xl text-primary mb-2" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>{contactDetails.phone}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg">
              <FaWhatsapp className="text-4xl text-primary mb-2" />
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p>{contactDetails.whatsapp}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg">
              <FaInstagram className="text-4xl text-primary mb-2" />
              <h3 className="text-xl font-semibold">Instagram</h3>
              <p>{contactDetails.instagram}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg">
              <FaEnvelope className="text-4xl text-primary mb-2" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p>{contactDetails.email}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
