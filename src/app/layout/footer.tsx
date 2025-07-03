
"use client";
import Image from "next/image";
import {
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbPhoneCall,
} from "react-icons/tb";

const icons = [
  {
    icon: <TbBrandInstagram className="w-6 h-6" />,
    href: "https://www.instagram.com/apprad.ir",
  },
  {
    icon: <TbBrandTelegram className="w-6 h-6" />,
    href: "https://t.me/app_rad",
  },
  {
    icon: <TbBrandWhatsapp className="w-6 h-6" />,
    href: "https://wa.me/989168509001",
  },
  {
    icon: <TbBrandLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/company/apprad.ir",
  },
  {
    icon: <TbPhoneCall className="w-6 h-6" />,
    href: "tel:989168509001",
  },
];

export default function ContactUs() {
  return (
    <section id="contact" className="max-w-7xl mx-auto mb-15 px-6 md:px-0">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FFE3E3] p-7 rounded-2xl shadow-lg text-black text-center lg:text-right">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/images/call.png"
            alt="تماس با ما"
            width={500}
            height={500}
            className="mt-[-80px] mb-[-25px] w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col  px-4 py-8">
          <h1 className="text-[25px] mt-10 lg:mt-0">
            با ما در ارتباط باشید
          </h1>
          <p className="text-[12px] mt-4 leading-6">
            آیا به دنبال راهی برای ارتقای کسب و کار خود در دنیای دیجیتال هستید؟ ما به شما کمک می‌کنیم!
            با مشاوران متخصص دنیای دیجیتال شما را خلق می‌کنیم
          </p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row mt-6 w-full lg:w-auto gap-3">
            <a href="tel:09168509001" className="bg-[#A2D2DF] text-black  text-[15px] px-6 py-3 rounded-lg transition hover:bg-[#FADFA1]">
              درخواست مشاوره
            </a>
            <a href="tel:09168509001" className="border border-[#A2D2DF] text-black text-[15px] px-6 py-3 rounded-lg transition hover:bg-[#A2D2DF]">
              اطلاعات تماس
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-end mt-6 gap-2">
            {icons.map((item, idx) => (
              <a href={item.href} key={idx} target="_blank" rel="noopener noreferrer" className="bg-[#A2D2DF] p-2 rounded-xl text-lg">
                {item.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
