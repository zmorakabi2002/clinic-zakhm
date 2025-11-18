import Image from "next/image";

export default function ServicesCard({
  classStyle = "bg-[#FF9E66] md:w-[210.6px] lg:w-[230px] w-[163px] md:h-[306px] h-[154px] border-[#FF8039] shadow-[0_0_0px_0_#00000000] ",
  cardData,
  isResText = false,
  ImageS_Desktop = 100,
  ImageS_Mobile = 78,
}) {
  return (
    <div
      className={` flex flex-col items-center text-center  border-2 rounded-[28px] md:py-6 py-3.5 px-[18px] gap-2 opacity-100 ${classStyle} `}
    >
      <Image
        src={cardData?.img}
        alt={"زخم سوختگی"}
        width={ImageS_Desktop}
        height={ImageS_Desktop}
        className={` hidden md:flex md:rounded-2xl rounded-xl object-cover aspect-square  `}
      />
      <Image
        src={cardData?.img}
        alt={"زخم سوختگی"}
        width={ImageS_Mobile}
        height={ImageS_Mobile}
        className=" flex md:hidden md:rounded-2xl rounded-xl object-cover aspect-square"
      />
      <h3
        className={`font-samim font-bold md:text-[20px] text-[16px] leading-[38px] tracking-[0.01em] text-center text-[#141C24]`}
      >
        {cardData?.title}
      </h3>
      <p
        className={`${
          isResText ? "flex" : "hidden md:flex"
        } font-samim font-normal md:text-[14px] text-[12px] md:leading-[26px] leading-6 align-middle text-[#202B37] `}
      >
        {cardData?.text}
      </p>
    </div>
  );
}
