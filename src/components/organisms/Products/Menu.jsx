import React, { useState } from "react";
import Title from "../../atoms/Text/Title";
import Card from "../Card/Card";

// Menu list with categories integrated
const menuList = [
  {
    id: 1,
    image: "/images/seblak.png",
    title: "Seblak Hemat 1",
    desc: "Kerupuk 1, Topping 1, Seafood 1, Telur 1.",
    price: "Rp. 7.000",
    category: "Seblak",
  },
  {
    id: 2,
    image: "/images/seblak.png",
    title: "Seblak Hemat 2",
    desc: "Kerupuk 1, Topping 2, Seafood 2, Telur 1.",
    price: "Rp. 10.000",
    category: "Seblak",
  },
  {
    id: 3,
    image: "/images/seblak.png",
    title: "Baso Aci Hemat",
    desc: "Bakso aci dengan isian Cilok biasa 3,Cilok rangu 2",
    price: "Rp. 10.000",
    category: "Selain Seblak",
  },
  {
    id: 4,
    image: "/images/seblak.png",
    title: "Seblak Komplit",
    desc: "Kerupuk 1, Topping 1, Seafood 1, Telur 1.",
    price: "Rp. 10.000",
    category: "Seblak",
  },
  {
    id: 5,
    image: "/images/seblak.png",
    title: "Es Teh Manis",
    desc: "Es teh manis yang segar dan menyegarkan.",
    price: "Rp. 5.000",
    category: "Minuman",
  },
  {
    id: 6,
    image: "/images/seblak.png",
    title: "Jus Alpukat",
    desc: "Jus alpukat dengan tambahan susu kental manis.",
    price: "Rp. 12.000",
    category: "Minuman",
  },
];

const categories = ["Semua", "Seblak", "Selain Seblak", "Minuman"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredMenuList =
    selectedCategory === "Semua"
      ? menuList
      : menuList.filter((menu) => menu.category === selectedCategory);

  return (
    <section className="pt-12 px-6">
      {/* TITLE */}
      <Title>Menu</Title>

      <div className="flex flex-col items-center gap-4">
        {/* CATEGORIES FILTER */}
        <h2 className="text-lg font-londrina tracking-wider -mb-2">Kategori</h2>

        <div className="relative w-full">
          <div className="flex justify-center w-full categories-filter">
            <div className="relative flex space-x-4 pl-1 pr-5 overflow-x-auto overflow-y-hidden categories-filter">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 px-4 rounded-lg whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-secondary text-primary"
                      : "bg-black/20 text-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Left Shadow */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div> */}
          {/* Right Shadow */}
          <div className="absolute xsm:hidden right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100/70 to-transparent pointer-events-none"></div>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-4 w-full md:w-2/3">
          <input
            type="text"
            className="w-full bg-black/20 placeholder:text-slate-200 rounded-lg py-2 px-4 focus:outline-none"
            placeholder="Cari Menu..."
          />
        </div>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 tablet:grid-cols-5 lg:grid-cols-6 gap-4">
        {filteredMenuList.map((menu) => (
          <Card key={menu.id}>
            <Card.Top image={menu.image} title={menu.title} desc={menu.desc} />
            <Card.Bottom price={menu.price} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Menu;
