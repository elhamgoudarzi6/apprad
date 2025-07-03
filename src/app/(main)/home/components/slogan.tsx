'use client';

import { motion } from 'framer-motion';

export default function Slogan() {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 md:px-0 my-10">
      <div className="bg-[#FFE3E3] rounded-2xl shadow-lg py-20 px-5 text-center">
        {/* تیتر انیمیشنی */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold leading-tight mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          خلق تجربه‌ای متفاوت در دنیای آنلاین با اپراد
        </motion.h2>

        {/* دکمه انیمیشنی */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="tel:09168509001"
            className="bg-[#6dbfd5] hover:bg-[#6dbfd5] transition-colors duration-300 text-[#06174c] text-md px-10 py-3 rounded-lg font-semibold shadow"
          >
            همین حالا اقدام کن
          </a>
        </motion.div>
      </div>
    </section>
  );
}
