"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ButtonRes from "@/components/common/button";
import { useEffect, useState } from "react";
import { useRef } from "react";

const HEADER_OPTION = [
  {
    id: 1,
    name: "Home",
    label: "خانه",
    url: "/",
    className: "flex justify-between items-center gap-2 ",
  },
  {
    id: 2,
    name: "services",
    label: "خدمات",
    url: "#servicesid",
    className: "",
  },
  { id: 3, name: "contact", label: "تماس", url: "#Footerid", className: "" },
  { id: 4, name: "about", label: "درباره ما", url: "/aboutUs", className: "" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();
  const panelRef = useRef();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/appointmentBooking");
  };
  return (
    <div className="absolute w-full flex justify-center text-[1.25rem] px-[26px] pt-[26px] md:px-[65px] md:pt-[42px] z-10 text-[#141C24]">
      <div className="w-full md:h-[108px] h-[68px] flex justify-between opacity-100 md:rounded-[38px] rounded-[25px] py-[22px]  md:px-8 px-3.5 bg-[#FFF0E5]">
        {/* Right side - Logo + Menu */}
        <div className="flex items-center gap-7">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#004b6b] flex items-center justify-center">
              <Link href={"/"}>
                <Image
                  src="/images/logo.png"
                  alt="لوگو کلینیک زخم"
                  width={56}
                  height={56}
                />
              </Link>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center md:gap-8 gap-2 text-[#141C24] font-[Samim] font-bold text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate leading-[38px] tracking-[0.01em]">
            {HEADER_OPTION.map((item, index) => {
              const isActive = pathname === item.url; // ← اضافه شده

              return (
                <Link
                  key={`${index}-${item.name}`}
                  href={item.url}
                  className={`${item.className} ${
                    isActive ? "text-[#ff5b00]" : "text-[#141C24]"
                  }`}
                >
                  {item.name === "Home" &&
                    (isActive ? (
                      <Image
                        alt="home1"
                        src="/images/Home.svg"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <Image
                        alt="alt2"
                        src="/images/homeBlack.svg"
                        width={32}
                        height={32}
                      />
                    ))}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Left side - Buttons */}
        <div className="flex justify-center items-center gap-4">
          <div className="relative inline-block group">
            <ButtonRes
              ref={btnRef}
              lable={"ثبت نام همکاران "}
              type="secend"
              classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate md:w-[187px] w-[148px] "
              onClickButton={() => setOpen((s) => !s)}
              ariaHaspopup={"true"}
              ariaExpanded={open}
              buttonType="butten"
            />
            <div
              className="absolute left-2 w-40 flex flex-col bg-white rounded-[20px] mt-1 shadow-lg contain-content
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 "
            >
              <Link
                href={""}
                className="py-2 px-3 text-bold hover:bg-gray-100 cursor-pointer"
              >
                پزشکان
              </Link>
              <Link
                href={""}
                className="py-2 px-3 text-bold hover:bg-gray-100 cursor-pointer"
              >
                درمانگران
              </Link>
            </div>
          </div>

          <div className="hidden md:flex">
            <ButtonRes
              lable={"گرفتن نوبت"}
              classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate"
              onClickButton={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
