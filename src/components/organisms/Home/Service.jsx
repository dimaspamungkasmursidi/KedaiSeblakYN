import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoFlashOutline } from "react-icons/io5";
import { LiaUtensilsSolid } from "react-icons/lia";
import Title from "../../atoms/Text/Title";
import TextLine from "../../atoms/Text/TextLine";

const services = [
  {
    id: 1,
    icon: <CiDeliveryTruck className="w-20 h-20" />,
    title: "Delivery Order",
    description: "Layanan antar pesanan kerumah (Cash on Delivery)",
  },
  {
    id: 2,
    icon: <IoFlashOutline className="w-20 h-20" />,
    title: "Seblak Instant",
    description: "Layanan antar pesanan kerumah tanpa antri (Cash on Delivery)",
  },
  {
    id: 3,
    icon: <LiaUtensilsSolid className="w-20 h-20" />,
    title: "Dine-In",
    description: "Datang dan makan di tempat, Buka jam 09:00 - 22:00 WIB",
  },
];

const Services = () => {
  return (
    <>
    <TextLine/>
      <section className="mt-4 mb-16 px-6">
        <Title>Layanan <br /> Kedai Seblak YN</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={service.id}
                ref={ref}
                className="flex items-center gap-2 p-2 border rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-20 h-20">{service.icon}</div>
                <div>
                  <h2 className="text-xl font-londrina font-normal tracking-wider">
                    {service.title}
                  </h2>
                  <p className="font-montserrat text-sm min-w-[200px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
