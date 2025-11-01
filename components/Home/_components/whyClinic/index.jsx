"use client";
import Image from "next/image";
const Whycard = [
  { id: 1, name: "", title: "", explain: "" },
  { id: 2, name: "", title: "", explain: "" },
  { id: 3, name: "", title: "", explain: "" },
  { id: 4, name: "", title: "", explain: "" },
  { id: 5, name: "", title: "", explain: "" },
];
export default function WhyClinic() {
  return (
    <div>
      <div className="font-samim font-bold text-[32px] leading-[44px] tracking-[0.01em] text-center pt-[68px] gap-[52px] ">
        <p>چرا کلینیک زخم نیک؟</p>
      </div>
      <div>
        <div className="w-[360px] h-[328px] flex flex-col justify-center items-center gap-[12px] px-[30px] py-[32px] rounded-[37px] border border-[#E4E7EC] shadow-[0px_0px_12.2px_0px_#00000040] opacity-100">
          <div>
            {Whycard.map((item, index) => {
              <div></div>;
            })}
            <Image
              src={"/images/why1.svg"}
              alt={`whyUs`}
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="font-samim font-bold text-[20px] leading-[38px] tracking-[0.01em] text-right align-middle">
            <p> تیم درمانی متخصص و باتجربه </p>
          </div>
          <div className="text-[#333333] font-samim font-normal text-[16px] leading-[24px] tracking-[0.01em] text-justify align-middle">
            <p>
              متخصصان ما با سال‌ها تجربه در درمان زخم‌های مزمن، هر بیمار را با
              دقت و رویکردی علمی تحت نظر قرار می‌دهند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
