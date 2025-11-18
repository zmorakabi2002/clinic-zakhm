"use client";
import { useData } from "@/app/context/dataContext";
import ArticleCard from "@/components/common/articleCard";
import ButtonRes from "@/components/common/button";

export default function page() {
  const { sampleWounds } = useData();

  return (
    <div className=" md:px-[65px] px-[26px]">
      <div className=" flex flex-col gap-[22px] pt-[182px] pb-8">
        <p className="font-[samim] font-bold text-[32px] leading-11 text-[#202B37]">
          نمونه زخم‌های بهبود یافته در کلینیک نیک
        </p>
        <p className="font-[samim] font-bold text-[20px] leading-[38px] text-[#637083]">
          نتایج واقعی درمان زخم‌های مزمن توسط تیم تخصصی ما
        </p>
      </div>
      <div className="flex flex-wrap gap-[17px] justify-center">
        {sampleWounds.map((item, index) => (
          <ArticleCard
            key={`sampleWounds-${index}`}
            cardData={item}
            moreLink={`/sampleShow/${item.id}`}
            bgColor={"bg-[#F2F4FF]"}
            firstTexts="text-[#414E62]"
            secondTexts="text-[#000000]"
          />
        ))}
      </div>
      <div className="flex flex-col  items-center">
        <p className="py-[68px] font-samim font-bold text-[20px] leading-[38px] text-center text-[#637083]">
          تمام تصاویر با رضایت بیماران منتشر شده‌اند و نشان‌دهنده بخشی از نتایج
          واقعی درمان در کلینیک زخم نیک هستند.
        </p>
        <p className="font-samim font-bold text-[32px] leading-11 text-center">
          آیا شما یا عزیزانتان نیاز به درمان تخصصی زخم دارید؟
        </p>
        <p className="font-samim py-5 font-bold text-[20px] leading-[38px] text-center text-[#637083]">
          {" "}
          اگر شما یا یکی از عزیزانتان نیاز به درمان تخصصی زخم دارید، با ما تماس
          بگیرید.
        </p>
        <div className="pb-[46px]">
          <ButtonRes lable={"دریافت نوبت"} classStyle="w-[162px] h-[48px]" />
        </div>
      </div>
    </div>
  );
}
