"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

import {
  Menu, X,
  CircuitBoard,
  Heart,
  Calendar,
  ShieldCheck,
  Link as LinkIcon,
  BarChart2,
  Trophy,
  GemIcon,
  DollarSign,
  PenTool,
  ShoppingCart,
  Gavel,
  AppWindow,
} from "lucide-react";

const megaMenuLinks = [
  {
    label: "مشاور جذب سرمایه",
    url: "https://ventureway.ir",
    icon: DollarSign, // سرمایه‌گذاری
  },
  {
    label: "آژانس تولید محتوا",
    url: "https://ndmkagency.com",
    icon: PenTool, // تولید محتوا
  },
  {
    label: "سامانه معاملات طلا",
    url: "https://elgold.ir",
    icon: GemIcon, // معاملات
  },
  {
    label: "خرم گستر الکترونیک",
    url: "https://khorram-madar.com",
    icon: CircuitBoard, // الکترونیک
  },
  {
    label: "فروشگاه مرموریس",
    url: "https://marmoris-art.com",
    icon: ShoppingCart, // فروشگاه
  },
  {
    label: "فروشگاه گوشی 24",
    url: "https://gosgi24.com",
    icon: ShoppingCart, // فروشگاه
  },
  {
    label: "مرکز وکلا قضاییه",
    url: "https://markazvl.ir",
    icon: Gavel, // حقوقی
  },
  {
    label: "جهان طب خرم",
    url: "https://jahantebkhoram.ir",
    icon: Heart, // پزشکی
  },
  {
    label: "سامانه رفاه",
    url: "https://refahkh.ir",
    icon: Trophy, // رفاه
  },
  {
    label: "وقت مشاوره حقوقی",
    url: "https://drjaferi.ir",
    icon: Calendar, // مشاوره
  },
  {
    label: "کلینیک دندانپزشکی",
    url: "https://drehsangaravand.ir",
    icon: ShieldCheck, // سلامت
  },
  {
    label: "سامانه نگاه",
    url: "https://negahlstp.ir",
    icon: LinkIcon, // لینک
  },
  {
    label: "سامانه آزمون",
    url: "https://azmoon.ir",
    icon: BarChart2, // آزمون
  },
  {
    label: "دکمه",
    url: "https://doukme.ir",
    icon: AppWindow, // اپلیکیشن
  },
  {
    label: "اپ پتوس",
    url: "http://apprad.ir",
    icon: AppWindow, // اپلیکیشن
  },
  {
    label: "اپ چرتکه",
    url: "https://apprad.ir",
    icon: AppWindow, // اپلیکیشن
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false); // state برای منوی نمونه‌کارها در موبایل

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="w-full fixed top-0 left-0 z-50 py-2 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between md:justify-between items-center text-xs">

        <Link href="/">
          <Image src="/assets/images/logo.png" alt="venture way" width={150} height={70} className="w-28 h-auto" />
        </Link>

        <button onClick={() => setMenuOpen(true)} className="md:hidden cursor-pointer text-gray-700">
          <Menu className="w-9 h-9" />
        </button>

        {/* منو دسکتاپ */}
        <nav className="hidden md:flex gap-2 items-center text-sm text-gray-700 px-2 py-2">
          <Link href="/" className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            صفحه اصلی
          </Link>

          {/* Mega Menu */}
          <div className="relative group">
            <button
              className="cursor-pointer px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition"
            >
              نمونه‌کارها
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[800px] rounded-xl shadow-xl bg-white text-gray-900 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-3 gap-6 p-8">
                {Array.from({ length: 3 }).map((_, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {megaMenuLinks
                      .slice(colIdx * 5, colIdx * 5 + 5)
                      .map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#15c4ae] transition"
                        >
                          <item.icon className="text-[#15c4ae] w-4 h-4 shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <Link href="/#about" prefetch className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            درباره ما
          </Link>
          <Link href="/#contact" prefetch className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            تماس با ما
          </Link>
        </nav>

        {/* دکمه لاگین */}
        <div className="hidden md:block">
          <a href="tel:989168509001" className="bg-[#6dbfd5] text-white text-md px-10 py-3 rounded-lg font-bold" >
            درخواست مشاوره
          </a>
        </div>


        {isMobile && (
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => {
              setMenuOpen(false);
              setMegaMenuOpen(false); // وقتی کل منو بسته میشه زیرمنو هم بسته بشه
            }}
            slotProps={{
              paper: {
                sx: { backgroundColor: "#6dbfd5", width: 320 },
              },
            }}
          >
            <div className="flex flex-col gap-5 p-6 text-[#1e778f]  uppercase text-lg">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setMegaMenuOpen(false);
                }}
                className="self-end"
              >
                <X className="w-6 h-6" />
              </button>

              <Link href="/" onClick={() => setMenuOpen(false)}>
                صفحه اصلی
              </Link>

              {/* دکمه نمونه‌کارها با قابلیت باز/بسته کردن زیرمنو */}
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex justify-between items-center w-full"
              >
                <span>نمونه‌کارها</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* زیرمنوی نمونه‌کارها */}
              {megaMenuOpen && (
                <div className="flex flex-col gap-2 pl-4">
                  {megaMenuLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMenuOpen(false);
                        setMegaMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}

              <a href="#about" onClick={() => setMenuOpen(false)}>
                درباره ما
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                تماس با ما
              </a>
            </div>
          </Drawer>
        )}

      </div>

    </header>
  );
};

export default Header;
