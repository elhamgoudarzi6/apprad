"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "طراحی وب سایت",
    description:
      "خلق وب‌سایت‌های مدرن، سفارشی و چشم‌نواز با بهترین فریم‌ورک‌ها؛ تجربه کاربری روان و طراحی خلاقانه‌ای که برندتان را متمایز می‌کند.",
    image: "/assets/images/we.png",
  },
  {
    title: "ایده‌پردازی استارتاپ",
    description:
      "از شکل‌گیری ایده تا اجرا؛ همراه شما در مسیر ساخت استارتاپی موفق با تیمی توانمند، تحلیل عمیق بازار و مشاوره تخصصی.",
    image: "/assets/images/s.png",
  },
  {
    title: "طراحی اپلیکیشن",
    description:
      "طراحی و توسعه اپلیکیشن‌های حرفه‌ای، کاربرپسند و امن؛ راهکاری ایده‌آل برای حضور قدرتمند در دنیای دیجیتال.",
    image: "/assets/images/a.png",
  },
  {
    title: "خدمات سئو",
    description:
      "ارتقاء جایگاه وب‌سایت شما در نتایج جستجو؛ با بررسی تخصصی، بهینه‌سازی اصولی و ارائه گزارش‌های کامل از روند پیشرفت.",
    image: "/assets/images/ww.png",
  },
  {
    title: "دیجیتال مارکتینگ",
    description:
      "توسعه و مدیریت استراتژی‌های دیجیتال مارکتینگ، برندسازی هدفمند و جذب مخاطبان وفادار با خلاقانه‌ترین روش‌ها.",
    image: "/assets/images/d.png",
  },
  {
    title: "طراحی گرافیک",
    description:
      "خلق هویت بصری منحصربه‌فرد؛ از طراحی لوگو و بنر تبلیغاتی تا تولید محتوای گرافیکی جذاب و حرفه‌ای.",
    image: "/assets/images/ai.png",
  },
];

const Services = () => {
  return (
    <section className="py-10 px-4 md:px-8 bg-white text-right">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold border-r-4 border-[#15c4ae] pr-4 mb-12 text-[#06174c]">
          خدمات اپراد
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden text-center shadow-lg border border-gray-200 text-[#06174c] py-3 px-5"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-40 h-auto object-cover mx-auto"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
