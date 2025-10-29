"use client";

import Image from "next/image";
import bg from "../../../../../public/images/about-bg.svg";
import ButtonRes from "@/app/(landing)/components/button/_components/buttonRes";

export default function AboutDesk() {
  const styling = {
    backgroundImage: `url(${bg.src})`,
    width: "100%",
    height: "100%",
  };
  return (
    <section
      className="bg-cover bg-no-repeat w-full h-[684px] flex justify-center overflow-hidden "
      style={styling}
    >
      <div className="w-full flex flex-col justify-between pr-[65px]">
        {/* ردیف اصلی: متن چپ / تصویر راست */}
        <div className="flex items-start justify-between gap-[60px] ">
          {/* ستون چپ: متن + دکمه‌ها */}
          <div className="w-[512px] text-right flex flex-col h-full gap-[32px] pt-[83px] ">
            <div>
              <h2 className="text-[32px] font-bold text-[#202b37] text-right leading-[44px] tracking-[1%] h-[44px]">
                درباره ما
              </h2>
            </div>
            <div className="w-[512px] h-[400px] flex flex-col  gap-[18px] rotate-0 opacity-100">
              <div>
                <p className="font-[Samim] font-normal not-italic text-[20px] leading-[44px] tracking-[1%] text-justify">
                  کلینیک زخم نیک با بهره‌گیری از ارائه‌ی درمان‌های نوین و علمی،
                  تیمی مجرب از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا
                  با استفاده از جدیدترین روش‌ها و فناوری‌های روز دنیا، بهترین
                  نتیجه‌ی درمانی را برای بیماران خود فراهم کند. <br /> این مرکز
                  درمان را براساس نوع زخم، شرایط جسمی بدن و عوامل زمینه‌ای،
                  به‌صورت اختصاصی و مرحله‌به‌مرحله برنامه‌ریزی می‌شود. <br />{" "}
                  هدف ما تنها ترمیم زخم نیست، بلکه بازگرداندن سلامت، آسایش و
                  کیفیت زندگی به بیماران است.
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-8 mt-auto">
              <ButtonRes lable={" مطالعه بیشتر"} type="second" />
              <ButtonRes lable={"تماس با ما"} />
            </div>
          </div>

          {/* ستون راست: تصویر */}
          <div>
            <Image
              src="/images/aboutclinic.jpg"
              alt="تیم کلینیک زخم نیک"
              width={680}
              height={460}
              className="object-cover ml-0 mr-auto w-fit mt-[169px] "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
