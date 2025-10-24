"use client";

import Image from "next/image";

export default function HerosectionDesk() {
  return (
    <section className=" relative h-[613px] w-full flex justify-center py-[60px] text-white ">
      <div className="w-[1150px] flex items-center justify-between">
        {/* متن سمت راست */}
        <div className=" max-w-[520px] flex flex-col gap-6">
          {/* تیتر */}
          <h1 className=" text-[38px] text-[#f9fafb] leading-[44px] font-bold tracking-[0.015em] text-right whitespace-nowrap">
            هر زخم، یک داستان؛ <br /> ما داستان شما را به پایان خوش می‌رسانیم
          </h1>

          {/* توضیح */}
          <p className="text-[24px] leading-[44px] text-[#e4e7ec] tracking-[0.01em] font-medium text-justify align-middle ">
            تیم متخصص ما با تکنولوژی روز دنیا، درمان مرحله‌به‌مرحله و پیگیری
            کامل، شما را همراهی می‌کند.
          </p>

          {/* عکس پزشکان + متن */}
          <div className="flex items-center gap-[32px] mt-4 w-[377px] h-[86px] ">
            <div className="flex -space-x-7 ">
              <div className="rounded-full border-[1px] border-[#0b84c1]">
                <Image
                  src="/images/p-hero-right.jpg"
                  alt="پزشک"
                  width={86}
                  height={86}
                  className="rounded-full border-[5px] border-white aspect-square object-cover"
                />
              </div>
              <div className="rounded-full border-[1px] border-[#0b84c1]">
                <Image
                  src="/images/p-hero-right.jpg"
                  alt="پزشک"
                  width={86}
                  height={86}
                  className="rounded-full border-[5px] border-white aspect-square object-cover"
                />
              </div>
              <div className="rounded-full border-[1px] border-[#0b84c1]">
                <Image
                  src="/images/p-hero-right.jpg"
                  alt="پزشک"
                  width={86}
                  height={86}
                  className="rounded-full border-[5px] border-white aspect-square object-cover"
                />
              </div>
            </div>
            <span className="text-[20px] text-[#f9fafb] leading-[28px] tracking-[0.01em] font-medium align-middle">
              +۱۰ پزشک مجرب
            </span>
          </div>

          {/* دکمه پایین */}
          <div className="mt-6">
            <button className="w-[223px] h-[52px] bg-[#ff8039] text-[20px] leading-[28px] tracking-[0.01em] text-white font-medium rounded-[50px] border-[1px] border-[#ff8039] align-middle">
              همین حالا نوبت بگیر
            </button>
          </div>
        </div>

        {/* تصویر سمت چپ */}
        <div className=" absolute bottom-0 left-0">
          <Image
            src="/images/p-hero-left.png"
            alt="دکتر کلینیک"
            width={625}
            height={517}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
