"use client";

import Image from "next/image";
import { useData } from "@/app/context/dataContext";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const data = useData();
  const item = data.find((i) => i.id === params.id);

  if (!item) return <p> آیتم مورد نظر یافت نشد</p>;

  return (
    <div className="w-full md:pt-[189px] pt-[126px]">
      <div className="md:flex md:flex-row flex flex-col gap-[32px] md:justify-between mb-[32px] md:mx-[61px] mx-[29px] ">
        <div className="flex flex-col gap-[70px] md:py-[23.5px] ">
          <h1 className="font-[samim] font-bold md:text-[32px] text-[24px] text-[#202B37]">
            وکیوم تراپی زخم NPWT
          </h1>
          <p className="font-[samim] font-bold md:text-[20px] text-[16px] text-[#414E62] md:leading-[38px] leading-[24px] text-justify ">
            alsjfiofjosdfjosfijofijfodsfij
          </p>
        </div>
        <Image
          src={"/images/vacium.jpg"}
          width={506}
          height={427}
          alt="vaciumimg"
        />
      </div>
      <div className="flex flex-col gap-[20px] mb-[32px] md:mx-[65px] mx-[26px]">
        <h1 className="font-[samim] font-bold md:text-[24px] text-[20px] text-[#202B37]">
          {" "}
          نحوه عملکرد وکیوم تراپی زخم
        </h1>
        <p className="font-[samim] font-normal md:text-[18px] text-[14px] text-[#202B37] md:leading-[30px] leading-[24px] text-justify">
          klskjdlkajsklj
        </p>
      </div>
      <div className="flex flex-col gap-[20px] mb-[32px] md:mx-[65px] mx-[26px]">
        <h1 className="font-[samim] font-bold md:text-[20px] text-[16px] text-[#202B37]">
          موارد استفاده از وکیوم تراپی زخم
        </h1>
        <ul className="font-[samim] font-normal md:text-[18px] text-[14px] text-[#414E62] md:leading-[30px] leading-[24px] text-justify">
          <li> 1 </li>
          <li> 2 </li>
          <li> 3 </li>
          <li> 4 </li>
          <li> 5 </li>
        </ul>
      </div>

      <div className="flex flex-col gap-[20px] mb-[52px] md:mx-[65px] mx-[26px]">
        <h1 className="font-[samim] font-bold md:text-[20px] text-[16px] text-[#202B37]">
          مزایای وکیوم تراپی زخم NPWT
        </h1>
        <ul className="font-[samim] font-normal md:text-[18px] text-[14px] text-[#414E62] md:leading-[30px] leading-[24px] text-justify ">
          <li> 1 </li>
          <li> 2 </li>
          <li> 3 </li>
          <li> 4 </li>
          <li> 5 </li>
        </ul>
      </div>

      <div className="md:mb-[138px] mb-[95px] md:mx-[47px] mx-[26px] flex justify-center text-center">
        <p className="font-samim font-bold md:text-[24px] text-[20px] md:leading-[44px] leading-[36px] text-[#075379] ">
          کلینیک زخم نیک مجهز به دستگاه وکیوم تراپی، آماده ارایه خدمات وکیوم
          تراپی زخم در بیمارستان و منزل میباشد.{" "}
        </p>
      </div>
    </div>
  );
}
