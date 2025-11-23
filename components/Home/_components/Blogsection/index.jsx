"use client";

import ArticleCard from "@/components/common/articleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useData } from "@/app/context/dataContext";
import Image from "next/image";
import Link from "next/link";

export default function Blogsection() {
  const { articles } = useData();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push("/appointmentBooking");
  // };

  return (
    <div className="contain-content flex flex-col  gap-8 md:px-[65px] px-7 pt-[50px] md:pb-20 pb-[46px]">
      <div className="flex justify-between items-center">
        <p className="font-[samim] font-bold md:text-[32px] text-[24px] leading-11 ">
          مجله کلینیک زخم شیراز
        </p>
        <Link
          className="flex gap-1 opacity-70 hover:opacity-100 cursor-pointer"
          href={"blogsPage"}
        >
          <p className="font-[samim] font-medium md:text-[18px] text-[14px]">
            نمایش بیشتر
          </p>
          <Image
            src={"/images/arrow-left copy.svg"}
            width={24}
            height={24}
            alt="arrow"
          />
        </Link>
      </div>
      <div className="md:hidden pb-20 flex justify-center">
        <Swiper
          spaceBetween={17}
          slidesPerView={"auto"}
          grabCursor={true}
          className=" md:w-[372px] w-[273px] md:h-[484px] h-[273px] overflow-visible! mx-0!"
        >
          {articles.map(
            (item, index) =>
              index < 10 && (
                <SwiperSlide key={`${index}-articles`} className="mx-0">
                  <ArticleCard cardData={item} moreLink={`/blogs/${item.id}`} />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div className="md:flex justify-center gap-[17px] hidden pb-20">
        {articles.map(
          (item, index) =>
            index < 3 && (
              <ArticleCard
                key={`${index}-${item.name}`}
                cardData={item}
                moreLink={`/blogs/${item.id}`}
              />
            )
        )}
      </div>
    </div>
  );
}
