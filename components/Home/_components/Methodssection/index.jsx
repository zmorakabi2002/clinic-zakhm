"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import MethodCard from "@/components/common/methodCard";
import { Key } from "lucide-react";
import { useData } from "@/app/context/dataContext";

export default function MethodsSection() {
  const methods = useData();

  // const Methods = [
  //   {
  //     id: 1,
  //     name: "",
  //     title: "وکیوم‌تراپی",
  //     explain:
  //       "با اعمال فشار منفی، ترشحات زخم خارج و جریان خون در ناحیه افزایش می‌یابد تا روند ترمیم سرعت بگیرد.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "",
  //     title: " لیزر و نوردرمانی",
  //     explain:
  //       "تابش کنترل‌شده‌ی نور قرمز باعث تحریک ترمیم بافت و بهبود زخم‌های مزمن و دیابتی می‌شود.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "",
  //     title: "PRP",
  //     explain:
  //       "پلاسمای غنی از پلاکت، با تحریک سلول‌های ترمیمی بدن، به بهبود سریع‌تر زخم و کاهش التهاب کمک می‌کند.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "",
  //     title: "اوزون‌تراپی",
  //     explain:
  //       "تزریق یا تماس موضعی اوزون باعث اکسیژن‌رسانی بهتر و کاهش عفونت در زخم‌های مزمن می‌شود.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "",
  //     title: " لارو درمانی",
  //     explain:
  //       "درمان با لاروهای استریل به پاک‌سازی بافت‌های مرده کمک می‌کند و روند ترمیم را تسریع می‌بخشد.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "",
  //     title: "پانسمان نوین",
  //     explain:
  //       "پانسمان‌های مدرن با حفظ رطوبت کنترل‌شده، محیط ایده‌آلی برای ترمیم زخم ایجاد می‌کنند.",
  //     img: "/images/aboutclinic.jpg",
  //   },
  // ];
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
          {methods.map((item, i) => (
            <SwiperSlide key={i} className="mx-0 pb-4">
              <MethodCard
                title={item.title}
                explain={item.explain}
                image={item.img}
                onLoadData={`/methods/${item.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
