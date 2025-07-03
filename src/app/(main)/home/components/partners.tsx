"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  const clients = [
    { id: 1, src: "/assets/images/vokala.png", alt: "vokala" },
    { id: 2, src: "/assets/images/edu.png", alt: "edu" },
    { id: 3, src: "/assets/images/lstp.png", alt: "lstp" },
    { id: 4, src: "/assets/images/khoram.png", alt: "khoram" },
    { id: 5, src: "/assets/images/jahanteb.png", alt: "jahanteb" },
    { id: 6, src: "/assets/images/pothos.png", alt: "pothos" },
    { id: 7, src: "/assets/images/ventura.png", alt: "venture way" },
    { id: 8, src: "/assets/images/vakil.png", alt: "vakil" },
    { id: 9, src: "/assets/images/elgold.png", alt: "elgold" },
    { id: 10, src: "/assets/images/ndmk.png", alt: "ndmk" },
    { id: 11, src: "/assets/images/marmoris.png", alt: "marmoris" },
    { id: 12, src: "/assets/images/goshi24.png", alt: "goshi24" },
  ];

  // انیمیشن برای والد
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // انیمیشن برای هر آیتم
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto mt-10 mb-20 px-4 md:px-0"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-2xl text-black mb-7"
      >
        مشتریان اپـــــراد
      </motion.h3>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3 bg-[#fae4b0] shadow-lg rounded-2xl p-12 md:p-20"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={itemVariants}
            className="flex justify-center items-center bg-white rounded-2xl h-20 md:h-full cursor-pointer"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={200}
              height={200}
              className="w-20 h-auto md:w-full  rounded-xl p-2"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
