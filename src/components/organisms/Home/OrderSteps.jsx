import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";

const steps = [
  {
    id: 1,
    title: "Pergi ke halaman Menu",
    description: "Lihat menu di halaman Menu.",
  },
  {
    id: 2,
    title: "Pilih Menu",
    description:
      "Lihat menu dan pilih seblak favorit kamu dengan mengklik tombol Detail.",
  },
  {
    id: 3,
    title: "Pesan atau masukan ke Keranjang",
    description:
      "Langsung pesan atau masukkan ke keranjang dahulu jika ingin memesan lebih dari satu.",
  },
  {
    id: 4,
    title: "Kirim pesanan",
    description:
      "Kirim pesanan yang diarahkan ke Whatsapp, setelah itu isi format pemesanan.",
  },
  {
    id: 5,
    title: "Pesanan selesai",
    description:
      "Tunggu beberapa saat, siapkan uang pembayaran dan pesananmu siap diantar ke rumah.",
  },
];

const OrderSteps = () => {
  return (
    <section className="py-14 px-6">
      <Title>Cara Pemesanan</Title>

      {/* ORDER STEPS */}
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-6">
        <div className="relative flex flex-col space-y-8">
          {steps.map((step, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={step.id}
                ref={ref}
                className="relative flex items-start p-2 bg-black/10 backdrop-blur-xl rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-tertiary rounded-full flex items-center justify-center text-white font-bold">
                  {step.id}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-londrina tracking-wider">
                    {step.title}
                  </h3>
                  <p className="mt-1">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-10 h-full border-l-2 border-tertiary"></div>
                )}
              </motion.div>
            );
          })}
        </div>
        
        {/* ILLUSTRATION */}
        <div className="hidden md:flex flex-col items-center justify-center md:w-1/2 2md:w-1/3 mt-10 md:mt-0">
          <motion.img
            src="/images/seblak.png"
            alt="Illustration"
            className="w-full min-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl text-center font-londrina font-normal tracking-wide mt-6">
              Pesanan Mudah dan Cepat!
            </h2>
            <p className="mt-2 pb-2 text-center">
              Ikuti langkah-langkah sederhana ini untuk memesan seblak favorit kamu dari rumah.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
