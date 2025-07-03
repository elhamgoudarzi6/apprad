"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 0,
    question: "من چرا به یک وب سایت نیاز دارم؟",
    reply:
      "تاثیرات وب و اینترنت بر کسی پوشیده نیست... اگر الان اقدام نکنید در آینده شانسی برای رقابت توی بازار رو ندارید.",
  },
  {
    id: 1,
    question: "داشتن وب سایت چه کمکی به کسب و کار من میتونه بکنه؟",
    reply:
      "خب مشتریانتون وقتی ببینن به حقوق شهروندیشون... و وجودش ضروریه.",
  },
  {
    id: 2,
    question: "آیا یک وب سایت میتونه به اعتبار من اضافه کنه؟",
    reply:
      "قدیما وقتی یکی کت شلوار شیک میپوشید... حتما خدمتی داره که قابل عرضه به همه دنیا هست.",
  },
  {
    id: 3,
    question: "هزینه طراحی سایت چگونه محاسبه میشه؟",
    reply:
      "با توجه به خدماتی که میخواهید سایتتون داشته باشه... نصف هزینه هنگام عقد قرارداد و بقیش موقع تحویل سایت.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-7xl mx-auto mt-10 px-4 md:px-0"
    >
      <motion.div
        variants={itemVariants}
        className="bg-[#A2D2DF] rounded-2xl shadow-lg p-6 md:p-12"
      >
        <h1 className="text-xl md:text-2xl font-bold text-center text-black mb-4">
          سوالات متداول
        </h1>
        <motion.div
          variants={containerVariants}
          className="space-y-2"
        >
          {faqs.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="border-b border-white/30 last:border-0"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-right text-black cursor-pointer font-medium py-3 focus:outline-none"
              >
                <span className="text-sm md:text-base">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <FaChevronDown className="w-4 h-4 text-white/50" />
                ) : (
                  <FaChevronLeft className="w-4 h-4 text-white/50" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-md font-IranyekanLight leading-7 py-2 md:p-4 bg-[#A2D2DF]">
                  {item.reply}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
