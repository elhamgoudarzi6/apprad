'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, LifeBuoy, Settings, Zap } from "lucide-react";

const features = [
  {
    title: "تیم متخصص",
    icon: Users,
  },
  {
    title: "راهکارهای سفارشی",
    icon: Settings,
  },
  {
    title: "پشتیبانی کامل",
    icon: LifeBuoy,
  },
  {
    title: "نوآوری مستمر",
    icon: Zap,
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="max-w-7xl mx-auto mt-10 px-4 md:px-0">
      <div className="bg-[#FFE3E3] rounded-2xl shadow-lg mx-auto py-15 px-10 my-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* تصویر */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex justify-center"
          >
            <Image
              src="/assets/images/why.png"
              alt="چرا اپراد"
              width={400}
              height={400}
              className="object-cover w-80 h-auto"
            />
          </motion.div>

          {/* متن و ویژگی‌ها */}
          <div className="md:col-span-6 space-y-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#06174c] text-right"
            >
              چرا <span className="text-[#6dbfd5]">اپــراد؟</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-gray-500 md:text-center"
            >
              ما با تجربه، خلاقیت و تعهد حرفه‌ای، مسیر موفقیت دیجیتال برند شما را هموار می‌کنیم.
            </motion.p>

            <div className="space-y-3">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-[#6dbfd5] text-white p-3 rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-600">{item.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

