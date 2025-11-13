import Image from "next/image";

export default function ServicesCard({
  classStyle = "bg-[#FF9E66]  border-[#FF8039] shadow-[0_0_0px_0_#00000000] ",
  cardData,
}) {
  return (
    <div
      className={`md:w-[210.6px] lg:w-[230px] w-[163px] md:h-[306px] h-[154px] flex flex-col items-center text-center  border-2 rounded-[28px]  py-[24px] px-[18px] gap-2 opacity-100 ${classStyle} `}
    >
      <Image
        src={cardData?.img}
        alt={"زخم سوختگی"}
        width={100}
        height={100}
        className={` hidden md:flex md:rounded-[16px] rounded-[12px] object-cover aspect-square`}
      />
      <Image
        src={cardData?.img}
        alt={"زخم سوختگی"}
        width={78}
        height={78}
        className=" flex md:hidden md:rounded-[16px] rounded-[12px] object-cover aspect-square"
      />
      <h3
        className={`font-samim font-bold md:text-[20px] text-[16px] leading-[38px] tracking-[0.01em] text-center text-[#141C24]`}
      >
        {cardData?.title}
      </h3>
      <p
        className={`hidden md:flex font-samim font-normal text-[14px] leading-[26px] tracking-[0.01em] text-justify align-middle text-[#202B37] `}
      >
        {cardData?.text}
      </p>
    </div>
  );
}
