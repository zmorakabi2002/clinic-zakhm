import Image from "next/image";
import Link from "next/link";

export default function MethodCard({ image, title, explain, onLoadData }) {
  return (
    <div className="md:w-[365px] w-[281px] md:h-[382px] h-[294px] md:rounded-[28px] rounded-[20px] shadow-[0px_0px_13.7px_0px_#00000054] bg-[#DDF2FD]">
      <div className=" md:w-[365px] w-[281px] md:h-[182px] h-[140px] border-[#B6E4FB] border contain-content md:rounded-t-[28px] rounded-t-[20px]">
        <Image src={image} alt={`Image-${image}`} width={365} height={182} />
      </div>
      <div className="md:h-[200px] h-[153px] flex flex-col justify-between px-[18px] py-3 ">
        <p className="font-[Samim] font-bold text-[20px] md:leading-[38px] leading-9 tracking-[1%] text-right align-middle">
          {title}
        </p>
        <p className="font-[Samim] h-[75px] w-full line-clamp-3 font-normal md:text-[16px] text-[14px] leading-6 tracking-[1%] text-justify align-middle">
          {explain}
        </p>
        <Link
          href={`${onLoadData}`}
          className="hidden md:flex font-samim font-normal text-[18px] leading-6 tracking-[1%]"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}
