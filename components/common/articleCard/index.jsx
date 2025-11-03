import Image from "next/image";
import ButtonRes from "../button";

export default function ArticleCard({ cardData }) {
  return (
    <div className="md:w-[372px] w-[273px] md:h-[484px] h-[378px] bg-[#075379] flex flex-col gap-[20px] rounded-[24px] shadow-[0px_0px_9.2px_0px_#00000025] ">
      <Image
        src={cardData?.imgSrc}
        alt="article"
        width={372}
        height={236}
        className="rounded-t-[21px]"
      />
      <div className="flex justify-between mx-[24px] font-[samim] font-normal md:text-[18px] text-[14px] leading-[24px] text-[#CED2DA]  ">
        <p> {cardData?.date} </p>
        <p>{cardData?.time} </p>
      </div>
      <p className="font-[samim] font-bold md:text-[24px] text-[20px] mx-[24px] md:leading-[44px] leading-[36px] text-[#F9FAFB] ">
        {cardData?.title}
      </p>
      <div className="mr-[24px] mb-[24px]">
        <ButtonRes lable={"ادامه مطلب"} secondIcon={"/images/arrow-left.svg"} />
      </div>
    </div>
  );
}
