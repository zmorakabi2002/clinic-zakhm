import Image from "next/image";
import ButtonRes from "../button";
import Link from "next/link";

export default function ArticleCard({
  cardData,
  moreLink,
  bgColor = "bg-[#075379]",
  firstTexts = "text-[#CED2DA]",
  secondTexts = "text-[#F9FAFB]",
  // firstTexts = "[&_p]:text-[#CED2DA]",
}) {
  return (
    <div
      className={`md:w-[372px] w-[273px] md:h-[484px] h-[378px] flex flex-col  rounded-3xl shadow-[0px_0px_9.2px_0px_#00000025] ${bgColor}`}
    >
      <Image
        src={cardData?.imgSrc}
        alt="article"
        width={372}
        height={236}
        className="rounded-t-[21px] md:w-[372px] md:h-[236px] w-[273px] h-[172px] md:mb-5 mb-0.5 "
      />
      <div className="h-full flex flex-col justify-between mb-6">
        <div
          className={`flex justify-between mx-6 font-[samim] font-normal md:text-[18px] text-[14px] leading-6 ${firstTexts}`}
        >
          <p> {cardData?.date} </p>
          <p>
            {" "}
            {cardData?.commentNum} {cardData?.topLeftTxt}
          </p>
        </div>
        <p
          className={`font-[samim] font-bold md:text-[24px] text-[20px] px-6 md:py-0 py-[22px] md:leading-11 leading-9 ${secondTexts}`}
        >
          {cardData?.title}
        </p>
        <Link href={`${moreLink}`} className=" pr-6">
          <ButtonRes
            lable={"ادامه مطلب"}
            secondIcon={"/images/arrow-left.svg"}
            classStyle="md:w-[187px] md:h-[52px] w-[151px] h-[40px] "
          />
        </Link>
      </div>
    </div>
  );
}
