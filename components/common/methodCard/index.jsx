import Image from "next/image";

export default function MethodCard({ image, title, explain, clickMore }) {
  return (
    <div className="md:w-[365px] w-[281px] md:h-[382px] h-[294px] md:rounded-[28px] rounded-[20px] shadow-[0px_0px_13.7px_0px_#00000054] bg-[#DDF2FD]">
      <div className=" md:w-[365px] w-[281px] md:h-[182px] h-[140px] border-[#B6E4FB] border-[1px] contain-content md:rounded-t-[28px] rounded-t-[20px]">
        <Image src={image} alt={`Image-${image}`} width={365} height={182} />
      </div>
      <div className="h-[200px] flex flex-col gap-[17px] px-[18px] py-[12px] ">
        <p className="font-[Samim] font-bold text-[20px] md:leading-[38px] leading-[36px] tracking-[1%] text-right align-middle">
          وکیوم‌تراپی
        </p>
        <p className="font-[Samim] font-normal md:text-[16px] text-[14px] leading-[24px] tracking-[1%] text-justify align-middle">
          با اعمال فشار منفی، ترشحات زخم خارج و جریان خون در ناحیه افزایش
          می‌یابد تا روند ترمیم سرعت بگیرد.
        </p>
        <p
          className="hidden md:flex font-samim font-normal text-[18px] leading-[24px] tracking-[1%]"
          onClick={clickMore}
        >
          {" "}
          اطلاعات بیشتر
        </p>
      </div>
    </div>
  );
}
