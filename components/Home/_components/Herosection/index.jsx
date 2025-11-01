"use client";

import Image from "next/image";
import ButtonRes from "@/components/common/button";

export default function Herosection() {
  const doctorImages = [
    "/images/p-hero-right.jpg",
    "/images/p-hero-right.jpg",
    "/images/p-hero-right.jpg",
  ];

  return (
    <section className=" relative flex justify-center text-white overflow-hidden w-full ">
      <div className="w-full flex items-end justify-between md:pr-[65px] pr-[26px] ">
        {/*  متن سمت راست */}
        <div className="h-[300px] md:h-[431px] w-[654px] flex flex-col md:gap-[40px] gap-[16px] mb-[28px] md:mt-[136px] mt-[58px] ">
          {/* تیتر */}
          <div className="hidden md:flenpmx flex-col justify-between ">
            <h1 className=" w-[654px] h-[88px] font-[Samim] font-bold text-[1.875rem] md:text-[2.125rem] md:gap-[40px] gap-[20px] lg:text-[2.375rem] leading-[44px] tracking-[0.015em] ">
              هر زخم، یک داستان؛ <br /> ما داستان شما را به پایان خوش می‌رسانیم
            </h1>
          </div>

          <div className="hidden md:flex flex-col justify-between ">
            {/* توضیح */}
            <p className="text-[1.125rem] md:gap-[40px] gap-[16px]  md:text-[1.25rem] lg:text-[1.5rem] leading-[44px] text-[#e4e7ec] tracking-[0.01em] font-medium text-justify align-middle">
              تیم متخصص ما با تکنولوژی روز دنیا، درمان مرحله‌به‌مرحله و پیگیری
              <br />
              کامل، شما را همراهی می‌کند.
            </p>
          </div>

          {/* ریسپانسیو/ متن بالا */}
          <div className=" flex md:hidden flex-col justify-between w-[326px] h-[108px]  gap-[20px] rotate-0 opacity-100 ">
            <h1 className="font-[Samim] font-bold not-italic text-[24px] leading-[40px] tracking-[1%] text-right text-[#E4E7EC] ">
              هر زخم، داستانی با پایان خوش.
            </h1>
            <p className="font-[Samim] font-bold not-italic text-[16px] leading-[24px] tracking-[1%] text-justify align-middle text-[#F9FAFB]">
              تیم متخصص با فناوری روز، درمان مرحله‌ای و پیگیری کامل.
            </p>
          </div>

          {/* عکس پزشکان + متن */}
          <div className=" md:flex md:flex-row flex flex-col-reverse items-start md:items-center  md:gap-[32px] gap-[12px] mt-4 md:w-[378px] w-[144px] ">
            <div className="flex md:w-[50%] w-full -space-x-4 md:-space-x-7 ">
              {doctorImages.map((src, i) => (
                <div
                  key={i}
                  className="rounded-full border-[1px] border-[#0b84c1] overflow-hidden"
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
              <span className="text-[20px] text-[#f9fafb] leading-[28px] tracking-[0.01em] font-medium align-middle">
                +۱۰ پزشک مجرب
              </span>
            </div>
          </div>

          {/* دکمه پایین */}
          <div className=" md:w-[222px] w-[176px] mb-[28px] ">
            <ButtonRes
              lable={"همین حالا نوبت بگیر"}
              classStyle=" text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] truncate"
            />
          </div>
        </div>

        {/* بخش چپ: تصویر دکتر 
        
        
        اینو بپرسم ک چرا اعمال نمیکنه 
        
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
