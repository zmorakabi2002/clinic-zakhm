"use client";

import Image from "next/image";

export default function ServicesectionDesk() {
  const services = [
    {
      title: "زخم سوختگی",
      text: "درمان تخصصی انواع سوختگی با جدیدترین روش‌ها برای کاهش عفونت و بازسازی پوست.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "میخچه",
      text: "برداشت میخچه به‌صورت بدون درد با روش‌های غیرتهاجمی و تجهیزات نوین کلینیکی.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم دیابتی",
      text: "درمان مرحله‌به‌مرحله زخم پای دیابتی برای جلوگیری از عفونت و بهبود سریع‌تر.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "بیماری پسوریازیس",
      text: "کنترل التهاب و پوسته‌ریزی ناشی از بیماری‌های خودایمنی با روش‌های تخصصی پوست.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "پاپیلودما گانگرنوزوم",
      text: "درمان زخم‌های عمیق و مزمن با بهره‌گیری از درمان‌های ترکیبی و سلول‌درمانی.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "درمان عفونت زخم",
      text: "با پاکسازی دقیق محل زخم و استفاده از آنتی‌بیوتیک‌های موضعی، از گسترش عفونت جلوگیری می‌کنیم.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم‌های سرطانی",
      text: "پوشش و درمان مرحله‌ای زخم‌های بدخیم با روش‌های نوین کنترل عفونت و ترمیم بافت.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم‌های عروقی",
      text: "بهبود زخم‌های مزمن ناشی از اختلال در گردش خون با روش‌های تخصصی ترمیمی.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم بستر",
      text: "پیشگیری و درمان زخم‌های فشاری بیماران بستری با روش‌های مدرن و پانسمان‌های هوشمند.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم جراحی",
      text: "مراقبت از زخم‌های بعد از جراحی برای جلوگیری از عفونت و تسریع روند ترمیم پوست.",
      img: "/images/aboutclinic.jpg",
    },
  ];

  return (
    <section className="w-full flex justify-center py-[80px] bg-[#ffffff] text-[#141C24]">
      <div className="w-[1150px] flex flex-col items-center gap=[52px] ">
        {/* عنوان */}
        <h2 className="text-[32px] font-bold mb-2 flex items-center gap-[18px]">
          🩹 خدمات تخصصی درمان زخم 🩹
        </h2>
        <p className="text-[24px] text-center mb-12 text-[#414E62] leading-[44px] font-samim font-bold tracking-[0.01em]">
          ما انواع زخم‌های مزمن و پیچیده را با روش‌های پیشرفته، سریع‌تر و
          مطمئن‌تر درمان می‌کنیم.
        </p>

        {/* کارت‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px]">
          {services.map((item, i) => (
            <div
              key={i}
              className="w-[200px] h-[260px] bg-[#FFF0E5] rounded-[16px] shadow-sm flex flex-col items-center text-center px-3 py-4 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={100}
                className="rounded-[8px] mb-3 object-cover aspect-square"
              />
              <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[14px] leading-[22px] text-[#344054]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
