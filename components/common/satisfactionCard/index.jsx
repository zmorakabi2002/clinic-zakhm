import Image from "next/image";

export default function SatisfactionCard({ cardData }) {
  return (
    <div className="border-[#E4E7EC] shadow-[0_0_12.2px_0_#00000040] rounded-[28px] border md:w-[364px] w-[360px] md:h-[336px] h-[291px] flex flex-col justify-center items-center gap-[26px] ">
      <Image
        src={`${cardData?.imgSrc}`}
        width={100}
        height={100}
        alt={`tile-${cardData?.title}`}
        className="md:w-[100px] w-[95px] md:h-[100px] h-[95px]"
      />
      <p className="font-samim font-bold md:text-[38px] text-[32px] leading-11 tracking-[1.5%] text-right align-middle">
        {cardData?.title}
      </p>
      <p className="font-samim font-bold md:text-[24px] text-[20px] md:leading-11 leading-9 tracking-[1%] text-right align-middle">
        {cardData?.text}
      </p>
    </div>
  );
}
