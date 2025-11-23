"use client";
import Image from "next/image";
import { useData } from "@/app/context/dataContext";
import { useParams } from "next/navigation";

import UserOpinion from "@/components/common/userOpinion";

export default function Home() {
  const params = useParams();
  const { articles } = useData();
  const item = articles.find((i) => i.id === params.id);
  if (!item) return <p> آیتم مورد نظر یافت نشد</p>;

  return (
    <div className=" md:pt-[182px] pt-[126px] md:px-[65px] px-[26px] md:mb-[179px] mb-[69px] flex flex-col items-center gap-8">
      <Image
        src={"/images/article.jpg"}
        width={611}
        height={511}
        alt={"blog"}
        className="md:flex hidden rounded-sm"
      />
      <Image
        src={"/images/article.jpg"}
        width={360}
        height={301}
        alt={"blog"}
        className="md:hidden rounded-sm"
      />
      <p className="font-[samim] font-bold md:text-[32px] text-[24px] text-center text-[#202B37] ">
        {item.title}
      </p>
      <p className="font-[samim] font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 text-justify text-[#344051] ">
        {item.Introduction}
      </p>
    </div>
  );
}
