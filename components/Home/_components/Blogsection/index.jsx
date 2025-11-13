"use client";

import ArticleCard from "@/components/common/articleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const articles = [
  {
    id: 1,
    imgSrc: "/images/article.jpg",
    date: "22 مهر",
    time: "زمان مطالعه : 8 دقیقه",
    title: "پیشگیری و درمان زخم های شیمی درمانی و پرتو درمانی",
  },
  {
    id: 2,
    imgSrc: "/images/article.jpg",
    date: "22 مهر",
    time: "زمان مطالعه : 8 دقیقه",
    title: "پیشگیری و درمان زخم های شیمی درمانی و پرتو درمانی",
  },
  {
    id: 3,
    imgSrc: "/images/article.jpg",
    date: "22 مهر",
    time: "زمان مطالعه : 8 دقیقه",
    title: "پیشگیری و درمان زخم های شیمی درمانی و پرتو درمانی",
  },
  {
    id: 4,
    imgSrc: "/images/article.jpg",
    date: "22 مهر",
    time: "زمان مطالعه : 8 دقیقه",
    title: "پیشگیری و درمان زخم های شیمی درمانی و پرتو درمانی",
  },
];

export default function Blogsection() {
  return (
    <div className="contain-content flex flex-col gap-[32px] md:pr-[72px] pr-[28px] pt-[50px] md:pb-[80px] pb-[46px]">
      <p className="font-[samim] font-bold md:text-[32px] text-[24px] leading-[44px] ">
        مجله کلینیک زخم شیراز
      </p>
      <div className=" pb-[80px] ">
        <Swiper
          spaceBetween={17}
          slidesPerView={"auto"}
          grabCursor={true}
          className=" md:w-[372px] w-[273px] md:h-[484px] h-[273px] !overflow-visible !mx-0"
        >
          {articles.map((item, index) => (
            <SwiperSlide key={`${index}-articles`} className="mx-0">
              <ArticleCard cardData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
