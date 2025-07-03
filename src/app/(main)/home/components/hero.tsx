"use client";

import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto mt-30 mb-10">
      <div className=" bg-[#FFE3E3] rounded-2xl shadow-lg mx-4 px-10 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* متن سمت چپ */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 leading-tight">
            اپراد، دنیای دیجیتال شما را خلق می‌کند
          </h1>
          <p className="text-gray-600 text-base text-justify md:text-lg leading-relaxed">
            ارائه‌کننده راه‌حل‌های نوآورانه و کارآمد برای چالش‌های تکنولوژی شما
            از ایده تا اجرا، کنار شما در مسیر تحول دیجیتال و مارکتینگ شما
            خواهیم بود تا رویای خود را به واقعیت تبدیل کنید و به دنیای تکنولوژی
            بدون چالش قدم بگذارید!
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-center">
            <a href="tel:09168509001" className="bg-[#6dbfd5] hover:bg-[#FADFA1] transition text-white font-semibold py-3 px-6 rounded-lg w-full  md:w-auto">
              درخواست مشاوره
            </a>
            <a href="tel:09168509001" className="border border-[#6dbfd5] text-[#6dbfd5] hover:bg-[#6dbfd5] hover:text-white transition font-semibold py-3 px-6 rounded-lg w-full md:w-auto">
              اطلاعات تماس
            </a>
          </div>
        </div>
        {/* تصویر سمت راست */}
        <div
          className="flex justify-center lg:justify-end"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <Image
            src="/assets/images/hero.png"
            alt="دنیای دیجیتال"
            width={600}
            height={500}
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
}
