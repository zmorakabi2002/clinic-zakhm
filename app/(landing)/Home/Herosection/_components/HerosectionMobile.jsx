"use client";

import Image from "next/image";

export default function HerosectionMobile() {
  return (
    <section className="relative w-full min-h-[720px] bg-[#004b6b] text-white overflow-hidden">
      {/* تصویر دکتر: چسبیده به چپ/پایین و زیر محتوا */}
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          src="/images/p-hero-left.png"
          alt="دکتر کلینیک"
          width={560}
          height={460}
          className="object-contain w-[75vw] h-auto"
          priority
        />
      </div>

      {/* محتوای سمت راست */}
      <div className="relative z-10 px-5 pt-8 pb-[140px] flex flex-col items-end text-right">
        {/* تیتر */}
        <h1 className="text-[28px] leading-[40px] font-bold tracking-[0.015em] text-[#f9fafb]">
          هر زخم، یک داستان؛ <br /> ما داستان شما را به پایان خوش می‌رسانیم
        </h1>

        {/* توضیح */}
        <p className="mt-3 text-[16px] leading-[28px] text-[#e4e7ec] tracking-[0.01em] font-medium">
          تیم متخصص ما با تکنولوژی روز دنیا، درمان مرحله‌به‌مرحله و پیگیری کامل،
          شما را همراهی می‌کند.
        </p>

        {/* --- آواتارها و متن: دقیقاً کد خودت بدون هیچ تغییری --- */}
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
        {/* --- پایان آواتارها --- */}

        {/* دکمه */}
        <button className="mt-6 w-[223px] h-[52px] bg-[#ff8039] text-[18px] leading-[28px] tracking-[0.01em] text-white font-medium rounded-[50px] border border-[#ff8039]">
          همین حالا نوبت بگیر
        </button>
      </div>
    </section>
  );
}
