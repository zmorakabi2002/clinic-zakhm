"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import MethodCard from "@/components/common/methodCard";
import { Key } from "lucide-react";

export default function MethodsSection() {
  const Methods = [
    { id: 1, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
    { id: 2, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
    { id: 3, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
    { id: 4, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
    { id: 5, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
    { id: 6, name: "", title: "", explain: "", img: "/images/aboutclinic.jpg" },
  ];
  return (
    <div className="contain-content md:pr-[65px] pr-[18px]">
      <div className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[0.01em] text-right text-[#202B37]">
        <p>روش‌های نوین درمان زخم</p>
      </div>
      <div className="py-[52px] ">
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          grabCursor={true}
          className="md:w-[365px] w-[281px] md:h-[382px] h-[294px] !overflow-visible !mx-0 "
        >
          {Methods.map((item, i) => (
            <SwiperSlide key={i} className="mx-0 pb-4">
              <MethodCard
                title={item.title}
                explain={item.explain}
                image={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
