"use client";

import Image from "next/image";

export default function Aboutsection() {
  return (
    <section
      className="w-full bg-white py-12 px-5 flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about-bg.svg')",
      }}
    >
      {/* عنوان */}
      <h2 className="text-[22px] font-bold text-[#1D2939] mb-6 text-center">
        درباره ما
      </h2>

      {/* توضیح */}
      <p className="text-[#475467] text-[16px] leading-[28px] text-justify max-w-[600px] mb-8">
        کلینیک زخم نیک با بهره‌گیری از ارائه‌ی درمان‌های نوین و علمی، تیمی مجرب
        از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا با استفاده از
        جدیدترین روش‌ها و فناوری‌های روز دنیا، بهترین نتیجه‌ی درمانی را برای
        بیماران خود فراهم کند.
        <br />
        در این مرکز، درمان‌ها بر اساس نوع زخم، شرایط عمومی بدن و عوامل زمینه‌ای،
        به‌صورت اختصاصی و مرحله‌به‌مرحله برنامه‌ریزی می‌شود.
        <br />
        هدف ما تنها ترمیم زخم نیست؛ بلکه بازگرداندن سلامت، آسایش و کیفیت زندگی
        به بیماران است.
      </p>

      {/* تصویر تیم */}
      <div className="mb-8">
        <Image
          src="/images/about-team.png"
          alt="تیم کلینیک زخم نیک"
          width={600}
          height={400}
          className="rounded-[12px] object-cover shadow-md"
        />
      </div>

      {/* دکمه‌ها */}
      <div className="flex items-center justify-center gap-4">
        <button className="w-[160px] h-[48px] bg-[#FF8039] text-white rounded-[40px] text-[16px] font-medium">
          تماس با ما
        </button>
        <button className="w-[160px] h-[48px] border border-[#0B84C1] text-[#0B84C1] rounded-[40px] text-[16px] font-medium">
          مطالعه بیشتر
        </button>
      </div>

      {/* تیتر پایین */}
      <p className="mt-8 text-[#101828] text-[16px] font-medium">
        نمونه زخم‌های بهبود یافته کلینیک زخم نیک
      </p>
    </section>
  );
}
