"use client";
import Image from "next/image";

export default function AboutDesk() {
  return (
    <section className="bg-gray-50 py-10 px-6 rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* متن درباره ما */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">درباره ما</h2>
          <p className="text-gray-700 leading-loose text-base">
            کلینیک زخم نیک با بهره‌گیری از ارتقای درمان‌های نوین و علمی، تیمی
            مجرب از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا بهترین
            خدمات درمانی را به بیماران ارائه دهد. هدف ما بهبود کیفیت زندگی
            بیماران با ارائه درمان‌های موثر و مراقبت‌های تخصصی است. ما به درمان
            زخم‌های مزمن، زخم‌های دیابتی، زخم‌های فشاری و زخم‌های جراحی
            می‌پردازیم. در کلینیک زخم نیک، بیمار تنها نیست؛ بلکه تیمی از متخصصان
            در کنار اوست تا مسیر درمان را هموار سازد.
          </p>
          <div className="flex gap-4 pt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              مطالعه بیشتر
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              تماس با ما
            </button>
          </div>
        </div>

        {/* تصویر و کپشن */}
        <div className="md:w-1/2 text-center">
          <Image
            src="/images/aboutclinic.jpg"
            alt="کلینیک زخم نیک"
            width={500}
            height={350}
            className="rounded-lg mx-auto"
          />
          <p className="text-sm text-gray-600 mt-4">
            نمونه زخم های بهبود یافته کلینیک زخم نیک
          </p>
        </div>
      </div>
    </section>
  );
}
