import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";

const menuCategories = [
  {
    category: "Paket Seblak",
    items: [
      { name: "Seblak Hemat 1", description: "Kerupuk 1, Topping 1, Seafood 1, Telur 1.", price: "Rp 7.000" },
      { name: "Seblak Hemat 2", description: "Kerupuk 1, Topping 2, Seafood 2, Telur 1.", price: "Rp 10.000" },
      { name: "Seblak Hemat 3", description: "Kerupuk 2, Topping 2, Seafood 2, Telur 1, Cekek 1.", price: "Rp 13.000" },
      { name: "Seblak Komplit", description: "Kerupuk 3, Topping 2, Seafood 2, Telur 1, Cekek 1.", price: "Rp 15.000" },
      { name: "Seblak Super Komplit", description: "Kerupuk 3, Topping 3, Seafood 3, Telur 1, Cekek 2, Free Es Teh.", price: "Rp 20.000" },
    ],
  },
  {
    category: "Selain Seblak",
    items: [
      { name: "Mie Goreng Seblak", description: "Mie Goreng dengan bumbu Seblak + Telur.", price: "Rp 8.000" },
      { name: "Mie Kuah Seblak", description: "Mie Kuah dengan bumbu Seblak + Telur.", price: "Rp 8.000" },
      { name: "Baso Aci Hemat", description: "Bakso aci dengan isian Cilok biasa 3, Cilok rangu 2, Pilus, Cuanki Lidah, Ceker.", price: "Rp 12.000" },
      { name: "Baso Aci Komplit", description: "Bakso aci dengan isian Cilok biasa 3, Cilok rangu 2, Pilus, Cuanki Lidah, siomay, Ceker, Telur.", price: "Rp 12.000" },
    ],
  },
  {
    category: "Minuman",
    items: [
      { name: "Teh", description: "Dingin/Hangat", price: "Rp 3.000" },
      { name: "Jeruk", description: "Dingin/Hangat", price: "Rp 4.000" },
      { name: "Nutrisari", description: "Dingin/Hangat", price: "Rp 4.000" },
      { name: "Hilo", description: "Dingin/Hangat", price: "Rp 4.000" },
      { name: "Good Day", description: "Dingin/Hangat", price: "Rp 5.000" },
    ],
  },
  {
    category: "Level Pedas",
    items: [
      { name: "Level 1 + Free Sayur", },
      { name: "Level 2 + Free Sayur", },
      { name: "Level 3 + Free Sayur", },
      { name: "Level 4 + 1000", },
      { name: "Level 5 + 2000", },
    ],
  },
];

const OurTeam = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ triggerOnce: true });

  return (
    <section className="py-10 px-6">
      <Title>Tentang Kami</Title>
      <motion.div
        className="mt-8 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section 1 */}
        <motion.div
          ref={section1Ref}
          className="flex flex-col lg:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <figure className="relative lg:min-w-[600px] h-full border">
            <img
              src="/images/team.png"
              alt="About Us Image"
              className="w-full h-full rounded-lg shadow-lg"
            />
            <figcaption className="absolute bottom-0 left-0 bg-primary/70 backdrop-blur-lg text-white py-1 px-4 rounded-tr-md">
              Team Kami
            </figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-londrina tracking-wider">
              Kedai Seblak YN
            </h2>
            <p className="mt-2 text-lg">
              Kedai Seblak YN adalah sebuah kedai yang menyediakan makanan khas
              Indonesia seperti Seblak, Baso Aci, Mie Bumbu Seblak dan Minuman
              yang segar dengan harga yang ramah di kantong. Berlokasi di
              Plosokandang, Tulungagung, Jawa Timur.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          ref={section2Ref}
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-londrina tracking-wider">Kami Menyediakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-black/10 backdrop-blur-xl p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-rocksalt tracking-wider mb-4">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-sm mb-1">{item.description}</span>
                      <span className="text-lg font-bold">{item.price}</span>
                      <span className="border-b border-tertiary"></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
