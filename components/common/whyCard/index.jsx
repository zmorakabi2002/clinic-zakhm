import Image from "next/image";

export default function WhyCard({
  classStyle = "md:w-[360px] w-[184px] md:h-[328px] h-[153px] px-[30px] py-[17px] md:py-[32px] ",
  cardData,
}) {
  return (
    <div
      className={` flex flex-col justify-center items-center md:gap-[12px] gap-[8px]  md:rounded-[37px] rounded-[28px] border border-[#E4E7EC] md:shadow-[0px_0px_12.2px_0px_#00000040] shadow-[0px_0px_5px_0px_#00000040] opacity-100 ${classStyle}`}
    >
      <div>
        <Image
          src={cardData?.url}
          alt={`whyUs`}
          width={100}
          height={100}
          className=" hidden md:flex "
        />
        <Image
          src={cardData?.url}
          alt={`whyUs`}
          width={59}
          height={59}
          className="flex md:hidden pt-[17px]"
        />
      </div>
      <div
        className={`font-samim md:w-[300px] md:h-[38px] h-[48px] w-[146px] font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] text-center align-middle `}
      >
        <p> {cardData?.title}</p>
      </div>
      <div className="hidden md:flex text-[#333333] font-samim font-normal text-[16px] leading-[24px] tracking-[0.01em] text-justify align-middle">
        <p>{cardData?.explain}</p>
      </div>
    </div>
  );
}
