"use client";
import { useData } from "@/app/context/dataContext";
import ArticleCard from "@/components/common/articleCard";
import ButtonRes from "@/components/common/button";

export default function page() {
  const { articles } = useData();

  return (
    <div className="md:px-[65px] px-[26px] md:pt-[182px] pt-[126px] flex flex-col md:gap-8 gap-[22px] ">
      <p className="font-[samim] font-bold text-[32px] leading-11 text-[#202B37]">
        مجله کلینیک زخم شیراز
      </p>

      <div className="flex flex-wrap gap-[17px] justify-center">
        {articles.map((item, index) => (
          <ArticleCard
            key={`articles-${index}`}
            cardData={item}
            moreLink={`/blogs/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
