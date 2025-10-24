"use client";

import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function HeaderDesk() {
  return (
    <header className="w-full  flex justify-center py-4 text-[20px]">
      <div className=" top-[42px] left-[65px] w-[1150px] h-[100px] bg-[#FFF0E5] rounded-[38px] px-[32px] py-[22px] flex items-center justify-between opacity-100 shadow-sm">
        {/* Right side - Logدo + Menu */}
        <div className="flex items-center gap-[28px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#004b6b] flex items-center justify-center">
              {/* تصویر لوگو */}
              <Image
                src="/images/logo.png"
                alt="لوگو_کلینیک زخم"
                width={56}
                height={56}
              />
            </div>
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-8 text-[#141C24] font-medium">
            <Link href="/" className="flex items-center gap-2 text-[#ff5b00] ">
              <Home size={16} />
              خانه
            </Link>
            <Link href="/services">خدمات</Link>
            <Link href="/contact"> تماس</Link>
            <Link href="/about">درباره ما</Link>
          </nav>
        </div>

        {/* Left side - Buttons */}
        <div className="flex items-center gap-4">
          <button className="border-[2px] w-[188px] h-[52px] border-[#004b6b] text-[#141C24] bg-[#FFFFFF] font-medium px-4 py-2 rounded-[50px] ">
            ثبت نام همکاران
          </button>
          <button className="border-[1px] w-[149px] h-[52px] bg-[#ff8039] text-white font-medium px-[26px] py-3 rounded-[50px] ">
            گرفتن نوبت
          </button>
        </div>
      </div>
    </header>
  );
}
