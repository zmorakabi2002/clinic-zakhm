"use client";

import ServicesCard from "@/components/common/serviceCard";
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
    <section
      className="w-full flex justify-center py-20 text-[#141C24]"
      id="servicesid"
    >
      <div className="w-full flex flex-col items-center ">
        {/* عنوان */}
        <div className="">
          <div className="flex justify-center gap-[18px] pb-[18px] ">
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={36}
              height={36}
              className="hidden md:flex"
            />
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={24}
              height={24}
              className=" flex md:hidden"
            />
            <h2 className="font-samim font-bold md:text-[32px] text-[20px] md:leading-11 leading-9 tracking-[0.01em] text-center text-[#202B37] ">
              خدمات تخصصی درمان زخم
            </h2>
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={24}
              height={24}
              className=" flex md:hidden"
            />
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={36}
              height={36}
              className=" hidden md:flex"
            />
          </div>
          <p className="font-samim font-bold md:text-[24px] md-[16px] md:leading-11 leading-6 tracking-[0.01em] text-[#414E62] text-center">
            ما انواع زخم‌های مزمن و پیچیده را با روش‌های پیشرفته، سریع‌تر و
            مطمئن‌تر درمان می‌کنیم.
          </p>
        </div>
        {/* کارت‌ها */}

        <div className="flex justify-center flex-wrap md:gap-x-2 gap-x-2.5 md:gap-y-[52px] gap-y-2.5 pt-[52px] md:px-[50px] px-7">
          {services.map((item, index) => (
            <ServicesCard key={`${index}-${item.name}`} cardData={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
