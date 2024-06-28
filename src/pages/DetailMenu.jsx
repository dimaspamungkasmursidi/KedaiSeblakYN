// DetailMenu.js

import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../atoms/Text/Title";
import { menuList } from "../Service/MenuData";

const DetailMenu = () => {
  const { id } = useParams(); // Ambil parameter id dari URL
  const menu = menuList.find((item) => item.id === parseInt(id)); // Cari menu berdasarkan id

  if (!menu) return <p>Menu tidak ditemukan.</p>;

  return (
    <section className="pt-12 px-6">
      <Title>Detail Menu</Title>
      <div className="flex flex-col items-center">
        <div className="my-4">
          <img src={menu.image} alt={menu.title} className="w-64 h-64 object-cover rounded-lg" />
        </div>
        <h2 className="text-xl font-semibold">{menu.title}</h2>
        <p className="text-lg text-gray-600">{menu.desc}</p>
        <p className="text-xl font-semibold mt-2">{menu.price}</p>
      </div>
    </section>
  );
};

export default DetailMenu;
