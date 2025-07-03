"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // آیکون زیبا

const packages = [
    {
        title: "طراحی سایت",
        price: 25000000,
        content: [
            { title: "طراحی قالب اختصاصی" },
            { title: "کدنویسی اختصاصی و سفارشی" },
            { title: "امکان سفارشی‌سازی و ارتقا" },
            { title: "یک سال پشتیبانی رایگان" },
        ],
    },
    {
        title: "طراحی اپلیکیشن",
        price: 25000000,
        content: [
            { title: "طراحی قالب اختصاصی" },
            { title: "کدنویسی اختصاصی و سفارشی" },
            { title: "امکان سفارشی‌سازی و ارتقا" },
            { title: "یک سال پشتیبانی رایگان" },
        ],
    },
    {
        title: "طراحی لوگو",
        price: 3000000,
        content: [
            { title: "لوگوتایپ" },
            { title: "لوگو ترکیبی" },
            { title: "لوگو مونوگرام" },
            { title: "لوگو موشن" },
        ],
    },
    {
        title: "ادمین اینستاگرام",
        price: 3000000,
        content: [
            { title: "استوری موشن" },
            { title: "لوگو موشن" },
            { title: "کاور هایلایت" },
            { title: "طراحی قالب" },
            { title: "ماهانه 150 استوری" },
            { title: "ماهانه 10 پست" },
            { title: "ماهانه 60 ریلز" },
            { title: "آنالیز و تحلیل کسب‌وکار" },
        ],
    },
    {
        title: "طراحی گرافیک",
        price: 2500000,
        content: [
            { title: "بنر" },
            { title: "کاتالوگ" },
            { title: "بروشور" },
            { title: "کارت ویزیت" },
            { title: "موشن گرافیک" },
            { title: "ویدیو موشن" },
            { title: "اینفو موشن" },
        ],
    },
    {
        title: "سایت قرعه‌کشی آنلاین",
        price: 25000000,
        content: [
            { title: "پنل مدیریت" },
            { title: "پنل کاربران" },
            { title: "قرعه‌کشی آنلاین" },
            { title: "گزارش‌گیری" },
            { title: "خروجی Word" },
            { title: "خروجی Excel" },
            { title: "خروجی PDF" },
        ],
    },
    {
        title: "سایت فروشگاهی",
        price: 35000000,
        content: [
            { title: "پنل مدیریت" },
            { title: "پنل کاربران" },
            { title: "پنل فروشنده" },
            { title: "ثبت سفارش" },
            { title: "سبد خرید" },
            { title: "پرداخت آنلاین" },
        ],
    },
    {
        title: "سایت نوبت‌دهی",
        price: 30000000,
        content: [
            { title: "پنل مدیریت" },
            { title: "پنل کاربران" },
            { title: "پنل کسب‌وکار" },
            { title: "ثبت برنامه کاری" },
            { title: "ثبت نوبت" },
            { title: "طراحی پیج اختصاصی" },
        ],
    },
];

const Packages = () => {
    return (
        <section className="py-10 px-4 md:px-8 bg-white text-right">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-extrabold border-r-4 border-[#15c4ae] pr-4 mb-12 text-[#06174c]">
                    پکیج‌ها
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col"
                        >
                            {/* عنوان و قیمت با پس‌زمینه تیره */}
                            <div className="bg-[#6dbfd5] text-[#1b3b44] text-center rounded-t-2xl p-4">
                                <h3 className="text-lg md:text-xl font-extrabold">{pkg.title}</h3>
                                <div className="text-sm md:text-md font-semibold mt-1">
                                    شروع از {pkg.price.toLocaleString("fa-IR")} تومان
                                </div>
                            </div>

                            {/* لیست امکانات */}
                            <ul className="space-y-2 flex-1 p-5">
                                {pkg.content.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-sm text-gray-700"
                                    >
                                        <FaCheckCircle className="text-[#15c4ae]" />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
