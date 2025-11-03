"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import MethodCard from "@/components/common/methodCard";
import { Key } from "lucide-react";

export default function MethodsSection() {
  const Methods = [
    { id: 1, name: "", title: "", explain: "" },
    { id: 2, name: "", title: "", explain: "" },
    { id: 3, name: "", title: "", explain: "" },
    { id: 4, name: "", title: "", explain: "" },
    { id: 5, name: "", title: "", explain: "" },
    { id: 6, name: "", title: "", explain: "" },
  ];
  return (
    <div className=" contain-content pr-[65px]">
      <div className="font-samim font-bold text-[32px] leading-[44px] tracking-[0.01em] text-right pb-[52px]">
        <p>روش‌های نوین درمان زخم</p>
      </div>
      <div className="">
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          grabCursor={true}
          className="w-[365px] !overflow-visible !mx-0 "
        >
          {Methods.map((item, i) => (
            <SwiperSlide key={i} className="mx-0 pb-4">
              <MethodCard title={item.title} explain={item.explain} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
