import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/nomor_whatsapp_anda"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out text-white rounded-full p-3 shadow-lg flex items-center justify-center group"
    >
      <FaWhatsapp size={28} />
      <span className="text-center opacity-0 bg-green-500 text-white text-xs rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
        Oder Sekarang
      </span>
    </a>
  );
};

export default WhatsappButton;
