import Image from "next/image";

export default function MethodCard({ image, title, explain, clickMore }) {
  return (
    <div className="w-[365px] flex flex-col rounded-[28px] contain-content  border-[#B6E4FB]  border-solid shadow-[0px_0px_13.7px_0px_#00000054] bg-[#DDF2FD]">
      <div className=" rotate-0 opacity-100 ">
        <Image
          src={"/images/aboutclinic.jpg"}
          alt={`Image-${image}`}
          width={365}
          height={182}
        />{" "}
      </div>
      <div className="w-[365px] flex flex-col justify-between gap-[17px] px-[18px] py-[12px] ">
        <div className="font-[Samim] font-bold text-[20px] leading-[38px] tracking-[1%] text-right align-middle">
          <p>وکیوم‌تراپی </p>{" "}
        </div>
        <div className="font-[Samim] font-normal text-[16px] leading-[24px] tracking-[1%] text-justify align-middle">
          <p>
            با اعمال فشار منفی، ترشحات زخم خارج و جریان خون در ناحیه افزایش
            می‌یابد تا روند ترمیم سرعت بگیرد.
          </p>
        </div>
        <div onClick={clickMore}>اطلاعات بیشتر</div>
      </div>
    </div>
  );
}
