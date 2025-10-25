"use client";

import Image from "next/image";

export default function AboutDesk() {
  return (
    <section className="relative w-full h-[684px] flex justify-center bg-white overflow-hidden">
      <div className="w-[1150px] flex flex-col">
        {/* ردیف اصلی: متن چپ / تصویر راست */}
        <div className="flex items-start justify-between gap-[60px]">
          {/* ستون چپ: متن + دکمه‌ها با خطوط نارنجی پشتش */}
          <div className="relative w-[512px] h-[398px] text-right flex flex-col gap-[32px]">
            <h2 className="text-[32px] font-bold text-[#202b37] text-right leading-[44px] tracking-[1%] h-[44px]">
              درباره ما
            </h2>

            <div className="w-[512px] h-[322px] flex flex-col gap-[18px] rotate-0 opacity-100">
              <p className="font-medium text-[20px] leading-[28px] tracking-[1%] text-justify text-[#414E62] ">
                کلینیک زخم نیک با بهره‌گیری از ارائه‌ی درمان‌های نوین و علمی،
                تیمی مجرب از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا با
                استفاده از جدیدترین روش‌ها و فناوری‌های روز دنیا، بهترین نتیجه‌ی
                درمانی را برای بیماران خود فراهم کند. <br /> این مرکز درمان را
                براساس نوع زخم، شرایط جسمی بدن و عوامل زمینه‌ای، به‌صورت اختصاصی
                و مرحله‌به‌مرحله برنامه‌ریزی می‌شود. <br /> هدف ما تنها ترمیم
                زخم نیست، بلکه بازگرداندن سلامت، آسایش و کیفیت زندگی به بیماران
                است.
              </p>

              <div className="flex justify-start gap-[32px] w-[331px] h-[52px] ">
                <button className=" w-[159px] h-[52px] rounded-[50px] px-[26px] py-[12px] gap-[8px] rotate-0 opacity-100 border-[2px] border-[#086391] bg-[#FFFFFF] font-medium text-[20px] leading-[28px] tracking-[1%] text-[#141C24] ">
                  مطالعه بیشتر
                </button>
                <button className="w-[140px] h-[52px] rounded-[50px] px-[26px] py-[12px] gap-[8px] rotate-0 opacity-100 border-[1px]  border-[#FF8039] bg-[#FF8039] font-medium text-[20px] leading-[28px] tracking-[1%] text-[#FFFFFF]">
                  تماس با ما
                </button>
              </div>
            </div>
          </div>

          {/* ستون راست: تصویر */}
          <div>
            <Image
              src="/images/aboutclinic.jpg"
              alt="تیم کلینیک زخم نیک"
              width={675}
              height={456}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* کپشن جدا و وسط صفحه */}
        <p className="w-[372px] h-[36px] absolute left-[430.5px] rounded-[20px] px-[8px] py-[4px] gap-[8px] rotate-0 opacity-100">
          نمونه زخم های بهبود یافته کلینیک زخم نیک
        </p>
      </div>
    </section>
  );
}
