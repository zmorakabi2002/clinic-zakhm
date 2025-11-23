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
    <div className="pt-[202px] mx-[65px] mb-[153px] flex flex-col">
      <div className="flex flex-col items-center gap-8 mb-[52px]">
        <Image
          src={"/images/blog1.jpg"}
          width={605}
          height={511}
          alt={"blog"}
          className="md:flex hidden rounded-sm "
        />
        <Image
          src={"/images/blog1.jpg"}
          width={360}
          height={304}
          alt={"blog"}
          className="md:hidden flex rounded-sm "
        />
        <p className="font-[samim] font-bold md:text-[32px] text-[24px] text-center text-[#202B37] ">
          {item.title}
        </p>
        <p className="font-[samim] font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 text-justify text-[#414E62] ">
          {item.Introduction}
        </p>
      </div>

      <UserOpinion />
    </div>
  );
}
