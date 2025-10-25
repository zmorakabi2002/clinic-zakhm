"use client";

import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function HeaderMobile() {
  return (
    <header className="w-full  flex justify-center py-4 my-[26px] text-[20px]">
      <div className=" top-[26px] left-[26px] w-[360px] h-[68px] bg-[#FFF0E5] rounded-[25px] px-[14px] py-[18px] flex items-center justify-between opacity-100 shadow-sm">
        {/* Right side - Logo + Menu */}
        <div className="flex items-center gap-[28px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] rounded-full bg-[#004b6b] flex items-center justify-center">
              {/* تصویر لوگو */}
              <Image
                src="/images/logo.png"
                alt="لوگو_کلینیک زخم"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Left side - Buttons */}
        <div className="flex items-center gap-4">
          <button className="border-[2px] w-[188px] h-[52px] border-[#004b6b] text-[#141C24] bg-[#FFFFFF] font-medium px-4 py-2 rounded-[50px] ">
            ثبت نام همکاران
          </button>
        </div>
      </div>
    </header>
  );
}
