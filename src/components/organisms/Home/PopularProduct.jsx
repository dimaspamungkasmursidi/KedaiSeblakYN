import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";
import Button from "../../atoms/Buttons/Button";
import CardButton from "../../atoms/Buttons/CardButton";
import PopularMenuModal from "../Modal/PopularMenuModal"; // Import the modal component

const PopularMenu = [
  {
    id: 1,
    image: "/images/seblak.png",
    title: "Seblak Hemat 1",
    desc: "Kerupuk 1, Topping 1, Seafood 1, Telur 1.",
    price: "Rp. 7.000",
  },
  {
    id: 2,
    image: "/images/seblak.png",
    title: "Seblak Hemat 2",
    desc: "Kerupuk 1, Topping 2, Seafood 2, Telur 1.",
    price: "Rp. 10.000",
  },
  {
    id: 3,
    image: "/images/seblak.png",
    title: "Baso Aci Hemat",
    desc: "Bakso aci dengan isian Cilok biasa 3,Cilok rangu 2",
    price: "Rp. 10.000",
  },
  {
    id: 4,
    image: "/images/seblak.png",
    title: "Mie Goreng Seblak",
    desc: "Mie goreng bumbu seblak ditambah dengan telur",
    price: "Rp. 8.000",
  },
];

const PopularProduct = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu);
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  return (
    <section className="pt-12 px-6">
      {/* TITLE */}
      <Title>Menu Populer</Title>

      {/* POPULAR MENU CARD */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PopularMenu.map((menu, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              className="relative flex flex-col justify-between w-38 bg-black/10 backdrop-blur-xl rounded-xl border"
              key={menu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* CARD TOP */}
              <div className="">
                <figure className="p-2 flex justify-center items-center bg-white/20">
                  <img
                    src={menu.image}
                    alt="Seblak Image"
                    className="w-28 h-28 drop-shadow-[20px_20px_30px_rgba(0,0,0,0.58)]"
                  />
                </figure>
                <div className="px-2 pt-2">
                  <h2 className="font-londrina tracking-wider">{menu.title}</h2>
                  <p className="font-montserrat text-sm line-clamp-1 mb-1">
                    {menu.desc}
                  </p>
                </div>
              </div>

              {/* CARD BOTTOM */}
              <div>
                <div className="flex flex-col items-start px-2 mb-2">
                  <p className="font-montserrat font-bold">{menu.price}</p>
                </div>
                <div className="flex flex-col justify-center items-center px-2 pb-3">
                  <CardButton onClick={() => openModal(menu)}>Detail</CardButton>
                </div>
              </div>

              {/* RANKS */}
              <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-tertiary border flex justify-center items-center">
                <p className="font-rocksalt">{menu.id}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* BUTTON */}
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <Link to="/product">
          <Button color="bg-tertiary text-secondary hover:bg-secondary hover:text-primary">
            Lihat Semua Menu
          </Button>
        </Link>
      </div>

      {/* MODAL */}
      {selectedMenu && (
        <PopularMenuModal
          show={!!selectedMenu}
          onClose={closeModal}
          menu={selectedMenu}
        />
      )}
    </section>
  );
};

export default PopularProduct;
