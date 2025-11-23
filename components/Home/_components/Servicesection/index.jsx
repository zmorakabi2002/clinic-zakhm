"use client";

import ServicesCard from "@/components/common/serviceCard";
import Image from "next/image";
import { useData } from "@/app/context/dataContext";

export default function ServicesectionDesk() {
  const { services } = useData();
  return (
    <section
      className="w-full flex justify-center py-20 text-[#141C24]"
      id="servicesid"
    >
      <div className="w-full flex flex-col items-center ">
        {/* عنوان */}
        <div className="">
          <div className="flex justify-center gap-[18px]  pb-[18px] ">
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
          <p className="font-samim font-bold md:text-[24px] md-[16px] md:leading-11 leading-6 text-[#414E62] px-[26px] text-center">
            ما انواع زخم‌های مزمن و پیچیده را با روش‌های پیشرفته، سریع‌تر و
            مطمئن‌تر درمان می‌کنیم.
          </p>
        </div>
        {/* کارت‌ها */}
        <div className="flex justify-center flex-wrap gap-x-1.5 md:gap-y-[52px] gap-y-2.5 pt-[52px] [@media(min-width:768px)_and_(max-width:1294px)]:px-5 md:px-[60px]">
          {services.map((item, index) => (
            <ServicesCard
              key={`${index}-${item.name}`}
              cardData={item}
              moreLink={`/services/${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
