import Image from "next/image";
import { useState } from "react";

const specializedArea = [
  { id: 1, name: "زخم دیابتی" },
  { id: 2, name: "زخم بستر" },
  { id: 3, name: "زخم های مزمن" },
  { id: 4, name: "ترمیم بافت" },
];

export default function DrBox({ data, onPageClick }) {
  return (
    <div
      className="fixed bg-[#000000ad] z-20 w-full h-screen px-[27px] top-0 right-0 flex justify-center items-center "
      onClick={onPageClick}
    >
      <div className="w-[500px]  rounded-[22px] px-6 py-8 flex flex-col bg-[#F9FAFB] gap-[18px]">
        <div className=" flex flex-col items-center gap-[18px]">
          <p className=" font-bold text-[24px] leading-11">
            {data?.name}
            {/* علی رضایی */}
          </p>
          <Image
            src={data?.imgSrc}
            alt="doctorImage"
            width={120}
            height={120}
            className="rounded-[100%] border-2 border-[#086391] md:flex  "
          />
          <p className="font-[samim] font-normal md:text-[14px] text-[12px] text-[#F9FAFB] md:px-3 px-2.5 md:py-2 py-1 bg-[#086391] rounded-[36px] ">
            {" "}
            {data?.Expertise}
            {/* متخصص ترمیم بافت */}
          </p>
        </div>

        <div className="gap-3">
          <p className=" font-bold text-[20px] leading-[38px] tracking-[1%] text-justify">
            مدرک تحصیلی
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-[18px] leading-6 tracking-[1%] text-justify text-[#414E62] ">
              {data?.degree?.major}
              {/* baghal */}
            </p>
            <p className="font-normal text-[14px] leading-6 tracking-[1%] text-justify text-[#637083]">
              {data?.degree?.university}
              {/* shalgham */}
            </p>
          </div>
        </div>

        <div className="gap-3">
          <p className="font-bold text-[20px] leading-[38px] tracking-[1%] text-justify">
            {" "}
            سابقه کاری
          </p>
          <p className="font-normal text-[18px] leading-6 tracking-[1%] text-justify text-[#414E62]">
            {data?.workHistory}
            سال
          </p>
        </div>

        <div className="gap-3">
          <p className="font-bold text-[20px] leading-[38px] tracking-[1%] text-justify">
            حوزه های تخصصی
          </p>
          <div className="flex gap-2">
            {data?.specializedAreas?.map((item, index) => {
              return (
                <div key={`${index}-specializedArea`}>
                  <p className="font-medium text-[14px] text-[#202B37] bg-[#F9FAFB] border-2 border-[#086391] rounded-[36px] px-[18px] py-2 ">
                    {" "}
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-[20px] leading-[38px] tracking-[1%] text-justify">
            {" "}
            ساعات حضور
          </p>
          <p className="font-normal text-[18px] leading-6 tracking-[1%] text-justify text-[#414E62]">
            {" "}
            شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
