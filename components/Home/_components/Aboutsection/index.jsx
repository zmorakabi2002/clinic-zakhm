"use client";

import Image from "next/image";
import bg from "../../../../public/images/about-bg.svg";
import ButtonRes from "@/components/common/button";
export default function Aboutsection() {
  const styling = {
    backgroundImage: `url(${bg.src})`,
    width: "100%",
    height: "100%",
  };
  return (
    <section
      className=" w-full h-[684px] overflow-hidden flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={styling}
    >
      <div className="md:pr-[65px] md:w-full w-[22.25rem] md:flex md:flex-row flex flex-col md:items-start items-center md:justify-between justify-center h-full md:mt-[5.19rem] mt-[1.625rem] ">
        <div className="md:w-[32rem] w-[22.25rem] flex flex-col md:gap-[0rem] gap-[1.5rem] ">
          <div>
            <h2 className="font-[Samim] md:text-[2rem] text-[1.5rem] font-bold text-[#202b37] md:text-right text-center md:mb-[2rem] md:leading-[2.75rem] leading-[2.5rem] tracking-[0.0125rem]">
              درباره ما
            </h2>
          </div>
          <div className="md:w-[32rem] w-[356px]">
            <p className="font-[Samim] font-normal md:text-[1.25rem] text-[0.875rem] md:leading-[2.75rem] leading-[1.5rem] md:mb-[1.125rem] tracking-[0.0125rem] text-justify text-[#414E62] ">
              کلینیک زخم نیک با بهره‌گیری از ارائه‌ی درمان‌های نوین و علمی، تیمی
              مجرب از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا با
              استفاده از جدیدترین روش‌ها و فناوری‌های روز دنیا، بهترین نتیجه‌ی
              درمانی را برای بیماران خود فراهم کند. <br />
              در این مرکز، درمان بر اساس نوع زخم، شرایط عمومی بدن و عوامل
              زمینه‌ای، به‌صورت اختصاصی و مرحله‌به‌مرحله برنامه‌ریزی می‌شود.
              <br />
              هدف ما تنها ترمیم زخم نیست؛ بلکه بازگرداندن سلامت، آسایش و کیفیت
              زندگی به بیماران است.
            </p>
          </div>
          <div className="md:flex hidden md:justify-start justify-center gap-8 mt-auto ">
            <ButtonRes lable={" مطالعه بیشتر"} type="second" />
            <ButtonRes lable={"تماس با ما"} />
          </div>
        </div>
        {/* ستون چپ: تصویر */}
        <div>
          <Image
            src="/images/aboutclinic.jpg"
            alt="تیم کلینیک زخم نیک"
            width={680}
            height={460}
            className="object-cover ml-0 md:mt-[5.375rem] mt-[1.5rem] md:mb-[0rem] mb-[1.5rem] "
            priority
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center gap-8 mt-auto mx-[2.625rem] mb-[1.5rem] ">
        <ButtonRes lable={" مطالعه بیشتر"} type="second" />
        <ButtonRes lable={"تماس با ما"} />
      </div>
    </section>
  );
}
