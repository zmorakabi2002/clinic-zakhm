"use client";

import Image from "next/image";
import ButtonRes from "@/components/common/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Herosection() {
  const router = useRouter();
  const doctorImages = [
    "/images/p-hero-right.jpg",
    "/images/p-hero-right.jpg",
    "/images/p-hero-right.jpg",
  ];
  const handleClick = (e) => {
    router.push("/appointmentBooking");
  };
  return (
    <section className=" relative flex justify-center text-white overflow-hidden w-full ">
      <div className="w-full flex items-end justify-between md:pr-[65px] pr-[26px] ">
        {/*  متن سمت راست */}
        <div className="h-[300px] md:h-[431px] w-[654px] flex flex-col md:gap-10 gap-4 mb-7 md:mt-[136px] mt-[50px] ">
          {/* تیتر */}
          <div className="hidden md:flex flex-col justify-between ">
            <h1 className=" w-[654px] h-[88px] font-[Samim] font-bold text-[1.875rem] md:text-[2.125rem] md:gap-10 gap-5 lg:text-[2.375rem] leading-11 ">
              هر زخم، یک داستان؛ <br /> ما داستان شما را به پایان خوش می‌رسانیم
            </h1>
          </div>

          <div className="hidden md:flex flex-col justify-between ">
            {/* توضیح */}
            <p className="w-[600px] font-samim text-[1.125rem] md:gap-10 gap-4 md:text-[1.25rem] lg:text-[1.5rem] leading-11 text-[#e4e7ec] font-medium align-middle">
              تیم متخصص ما با تکنولوژی روز دنیا، درمان مرحله‌به‌مرحله و پیگیری
              کامل، شما را همراهی می‌کند.
            </p>
          </div>

          {/* ریسپانسیو/ متن بالا */}
          <div className=" flex md:hidden flex-col justify-between w-[326px] h-[108px]  gap-5 rotate-0 opacity-100 ">
            <h1 className="font-[Samim] font-bold not-italic text-[24px] leading-10 tracking-[1%] text-right text-[#E4E7EC] ">
              هر زخم، داستانی با پایان خوش.
            </h1>
            <p className="font-[Samim] font-bold  text-[16px] leading-6 text-justify align-middle text-[#F9FAFB]">
              تیم متخصص با فناوری روز، درمان مرحله‌ای و پیگیری کامل.
            </p>
          </div>

          {/* عکس پزشکان + متن */}
          <div className=" md:flex md:flex-row flex flex-col-reverse items-start md:items-center  md:gap-8 gap-3 mt-4 md:w-[378px] w-36 ">
            <div className="flex md:w-[50%] w-full -space-x-4 md:-space-x-7 ">
              {doctorImages.map((src, i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#0b84c1] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`پزشک ${i + 1}`}
                    width={86}
                    height={86}
                    className="rounded-full border-[5px] border-white aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <Link
                href={"/treatmentTeam"}
                className="text-[20px] text-[#f9fafb] leading-7 tracking-[0.01em] font-medium align-middle"
              >
                +۱۰ پزشک مجرب
              </Link>
            </div>
          </div>

          {/* دکمه پایین */}
          <div className=" md:w-[222px] w-44 mb-7 ">
            <ButtonRes
              lable={"همین حالا نوبت بگیر"}
              classStyle=" text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate"
              onClickButton={handleClick}
            />
          </div>
        </div>

        {/* بخش چپ: تصویر دکتر
         */}
        <div className="absolute left-0  ">
          <Image
            src="/images/p-hero-left.png"
            alt="دکتر کلینیک"
            width={625}
            height={517}
            className=" md:w-[45vw] md:h-auto w-[214px] h-[181px]"
          />
        </div>
      </div>
    </section>
  );
}
