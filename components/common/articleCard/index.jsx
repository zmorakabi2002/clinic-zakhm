import Image from "next/image";
import ButtonRes from "../button";
import Link from "next/link";

export default function ArticleCard({ cardData, moreLink }) {
  return (
    <div className="md:w-[372px] w-[273px] md:h-[484px] h-[378px] bg-[#075379] flex flex-col md:gap-5 rounded-3xl shadow-[0px_0px_9.2px_0px_#00000025] ">
      <Image
        src={cardData?.imgSrc}
        alt="article"
        width={372}
        height={236}
        className="rounded-t-[21px] md:w-[372px] md:h-[236px] w-[273px] h-[172px] "
      />
      <div className="flex justify-between mx-6 font-[samim] font-normal md:text-[18px] text-[14px] leading-6 text-[#CED2DA]  ">
        <p> {cardData?.date} </p>
        <p>{cardData?.time} </p>
      </div>
      <p className="font-[samim] font-bold md:text-[24px] text-[20px] px-6 md:py-0 py-[22px] md:leading-11 leading-9 text-[#F9FAFB] ">
        {cardData?.title}
      </p>
      <Link href={`${moreLink}`} className=" pr-6">
        <ButtonRes
          lable={"ادامه مطلب"}
          secondIcon={"/images/arrow-left.svg"}
          classStyle="w-[187px] h-[52px]"
        />
      </Link>
    </div>
  );
}
