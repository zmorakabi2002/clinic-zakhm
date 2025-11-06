"use client";

import ArticleCard from "@/components/common/articleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
];

export default function Blogsection() {
  return (
    <div className="contain-content flex flex-col gap-[32px] mx-[65px] mt-[50px] ">
      <p className="font-[samim] font-bold md:text-[32px] text-[24px] leading-[44px] ">
        مجله کلینیک زخم شیراز
      </p>

      <div className=" ">
        <div className="md:hidden w-[847px]">
          <Swiper
            spaceBetween={14}
            slidesPerView={"auto"}
            grabCursor={true}
            className="w-[273px] !overflow-visible !mx-0"
          >
            {articles.map((item, index) => {
              return (
                <SwiperSlide key={`${index}-article`}>
                  <ArticleCard cardData={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="md:flex hidden gap-[17px] ">
          {articles.map((item, index) => {
            return <ArticleCard cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
