"use client";
import { useData } from "@/app/context/dataContext";
import ArticleCard from "@/components/common/articleCard";
import ButtonRes from "@/components/common/button";
import { useState } from "react";

export default function page() {
  const { articles } = useData();
  // const [open, setOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(6);
  const handleClick = () => {
    setItemsCount(
      itemsCount === 6 ? 12 : itemsCount === 12 ? 18 : itemsCount === 18 && 6
    );
    // setOpen(!open);
  };
  return (
    <div className="md:px-[65px] px-[26px] md:pt-[182px] pt-[126px] flex flex-col md:gap-8 gap-[22px] ">
      <p className="font-[samim] font-bold text-[32px] leading-11 text-[#202B37]">
        مجله کلینیک زخم شیراز
      </p>

      <div className="flex flex-wrap gap-[17px] justify-center">
        {articles.map(
          (item, index) =>
            index < itemsCount && (
              <ArticleCard
                key={`articles-${index}`}
                cardData={item}
                moreLink={`/blogs/${item.id}`}
              />
            )
        )}
      </div>

      {/* <div
        className={`transition-all duration-300 mt-3 flex flex-wrap gap-[17px] justify-center overflow-hidden ${
          open ? "mt-3" : "max-h-0"
        }`}
      >
        {articles.map((item, index) => (
          <ArticleCard
            key={`articles-${index}`}
            cardData={item}
            moreLink={`/blogs/${item.id}`}
          />
        ))}
      </div> */}
      <div className="text-center">
        <button
          className="font-Samim font-bold md:text-[24px] text-[20px] md:leading-11 leading-9 cursor-pointer"
          onClick={handleClick}
        >
          {itemsCount === 18 ? "بستن" : "مشاهده بیشتر "}
        </button>
      </div>
    </div>
  );
}
