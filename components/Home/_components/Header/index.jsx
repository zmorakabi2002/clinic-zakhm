"use client";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import ButtonRes from "@/components/common/button";
const HEADER_OPTION = [
  {
    id: 1,
    name: "Home",
    label: "خانه",
    url: "/",
    className: "flex justify-between items-center gap-2 text-[#ff5b00] ",
  },
  { id: 2, name: "services", label: "خدمات", url: "/services", className: "" },
  { id: 3, name: "contact", label: "تماس", url: "/contact", className: "" },
  { id: 4, name: "about", label: "درباره ما", url: "/about", className: "" },
];

export default function Header() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/appointmentBooking");
  };
  const handleClicktwo = (e) => {
    e.preventDefault();
    router.push("/woundTherapistsLogin");
  };
  return (
    <header className=" absolute w-full flex justify-center text-[1.25rem] px-[26px] pt-[26px] md:px-[65px] md:pt-[42px]">
      <div className="w-full md:h-[108px] h-[68px] flex justify-between opacity-100 md:rounded-[38px] rounded-[25px] py-[22px]  md:px-[32px] px-[14px] bg-[#FFF0E5]">
        {/* Right side - Logo + Menu */}
        <div className="flex items-center gap-[28px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#004b6b] flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="لوگو کلینیک زخم"
                width={56}
                height={56}
              />
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center md:gap-8 gap-2 text-[#141C24] font-[Samim] font-bold text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate leading-[38px] tracking-[0.01em]">
            {HEADER_OPTION.map((item, index) => {
              return (
                <Link
                  key={`${index}-${item.name}`}
                  href={item.url}
                  className={item.className}
                >
                  {item.name === "Home" && (
                    <img src="/images/Home.svg" width="32px" height="32px" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Left side - Buttons */}
        <div className="flex justify-center items-center gap-4">
          <div className="  ">
            <ButtonRes
              lable={"ثبت نام همکاران "}
              type="secend"
              classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate md:w-[187px] w-[148px] "
              onClickButton={handleClicktwo}
            />
          </div>

          <div className="hidden md:flex ">
            <ButtonRes
              lable={"گرفتن نوبت"}
              classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate"
              onClickButton={handleClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
