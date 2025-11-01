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
  ];
  const services2 = [
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
    <section className="w-full flex justify-center py-[80px] text-[#141C24]">
      <div className="w-full flex flex-col items-center ">
        {/* عنوان */}
        <div className="">
          <div className="flex justify-center gap-[18px] pb-[18px] ">
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={36}
              height={36}
              className=" hidden md:flex"
            />
            <Image
              src="/images/band-aid.svg"
              alt="band-aid"
              width={24}
              height={24}
              className=" flex md:hidden"
            />
            <h2 className="font-samim font-bold md:text-[32px] text-[20px] md:leading-[44px] leading-[36px] tracking-[0.01em] text-center text-[#202B37] ">
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
          <p className="font-samim font-bold md:text-[24px] md-[16px] md:leading-[44px] leading-[24px] tracking-[0.01em] text-[#414E62] text-center">
            ما انواع زخم‌های مزمن و پیچیده را با روش‌های پیشرفته، سریع‌تر و
            مطمئن‌تر درمان می‌کنیم.
          </p>
        </div>
        {/* کارت‌ها */}
        <div className="flex md:flex-flow-col justify-center md:px-[97.5px] px-[28px] md:flex-wrap">
          <div className="flex flex-row flex-wrap md:flex-flow-col md:flex-wrap md:gap-[8px] gap-[12px] pt-[52px] ">
            {services.map((item, index) => (
              <div
                key={`${index}-${item.name}`}
                className="md:w-[210.6px] w-[173px] md:h-[306px] h-[154px] bg-[#FF9E66] border-[#FF8039] shadow-sm flex flex-col items-center text-center  border-2 rounded-[28px] pt-6 pb-6 px-[18px] gap-2 opacity-100  py-4 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className=" hidden md:flex md:rounded-[16px] rounded-[12px] object-cover aspect-square"
                />
                <Image
                  src={item.img}
                  alt={item.title}
                  width={78}
                  height={78}
                  className=" flex md:hidden md:rounded-[16px] rounded-[12px] object-cover aspect-square"
                />
                <h3 className="font-samim font-bold md:text-[20px] text-[16px] leading-[38px] tracking-[0.01em] text-center text-[#141C24]">
                  {item.title}
                </h3>
                <p className="hidden md:flex font-samim font-normal text-[14px] leading-[26px] tracking-[0.01em] text-justify align-middle text-[#202B37] ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap md:flex-flow-col md:flex-wrap md:gap-[8px] gap-[12px] pt-[52px] ">
            {services2.map((item, index) => (
              <div
                key={`${index}-${item.name}`}
                className="md:w-[210.6px] w-[173px] md:h-[306px] h-[154px] bg-[#FF9E66] border-[#FF8039] shadow-sm flex flex-col items-center text-center  border-2 rounded-[28px] pt-6 pb-6 px-[18px] gap-2 opacity-100  py-4 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className=" hidden md:flex md:rounded-[16px] rounded-[12px] object-cover aspect-square"
                />
                <Image
                  src={item.img}
                  alt={item.title}
                  width={78}
                  height={78}
                  className=" flex md:hidden md:rounded-[16px] rounded-[12px] object-cover aspect-square"
                />
                <h3 className="font-samim font-bold md:text-[20px] text-[16px] leading-[38px] tracking-[0.01em] text-center text-[#141C24]">
                  {item.title}
                </h3>
                <p className="hidden md:flex font-samim font-normal text-[14px] leading-[26px] tracking-[0.01em] text-justify align-middle text-[#202B37] ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
