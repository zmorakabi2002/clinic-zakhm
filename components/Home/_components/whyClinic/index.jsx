"use client";
import Image from "next/image";
const Whycard = [
  {
    id: 1,
    name: "Card1",
    title: "تیم درمانی متخصص و باتجربه",
    explain:
      "متخصصان ما با سال‌ها تجربه در درمان زخم‌های مزمن، هر بیمار را با دقت و رویکردی علمی تحت نظر قرار می‌دهند.",
    url: "/images/why1.svg",
  },
  {
    id: 2,
    name: "Card2",
    title: "جدیدترین فناوری‌های درمان زخم",
    explain:
      "از روش‌هایی چون وکیوم‌تراپی، PRP و اوزون‌تراپی برای تسریع ترمیم بافت و کاهش عفونت بهره می‌بریم.",
    url: "/images/why2.svg",
  },
  {
    id: 3,
    name: "Card3",
    title: "درمان اختصاصی متناسب با  هر بیمار",
    explain:
      "درمان در نیک کلینیک بر اساس نوع زخم، وضعیت عمومی بدن و سبک زندگی بیمار به‌صورت کاملاً شخصی‌سازی‌شده انجام می‌شود.",
    url: "/images/why3.svg",
  },
  {
    id: 4,
    name: "Card4",
    title: "محیط استریل و استاندارد درمانی",
    explain:
      "تمام مراحل درمان در محیطی کاملاً بهداشتی و با تجهیزات پیشرفته انجام می‌شود تا ریسک عفونت به حداقل برسد.",
    url: "/images/why4.svg",
  },
  {
    id: 5,
    name: "Card5",
    title: "پیگیری مداوم تا بهبودی کامل",
    explain:
      "فرایند درمان بیماران پس از هر ویزیت نیز پیگیری می‌شود تا نتیجه‌ای ماندگار و مطمئن حاصل شود.",
    url: "/images/why5.svg",
  },
];
export default function WhyClinic() {
  return (
    <div className="">
      <div className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[0.01em] text-center pt-[68px] gap-[52px] ">
        <p>چرا کلینیک زخم نیک؟</p>
      </div>
      <div className="flex flex-wrap md:px-[65px] px-[18px] md:pt-[52px] pt-[24px] justify-center md:gap-[35px] gap-[8px]">
        {Whycard.map((item, index) => {
          return (
            <div
              key={index}
              className="md:w-[360px] w-[184px] md:h-[328px] h-[153px] flex flex-col justify-center items-center md:gap-[12px] gap-[8px] px-[30px] py-[32px] md:rounded-[37px] rounded-[28px] border border-[#E4E7EC] md:shadow-[0px_0px_12.2px_0px_#00000040] shadow-[0px_0px_5px_0px_#00000040] opacity-100"
            >
              <div>
                <Image
                  src={item.url}
                  alt={`whyUs`}
                  width={100}
                  height={100}
                  className=" hidden md:flex "
                />
                <Image
                  src={item.url}
                  alt={`whyUs`}
                  width={59}
                  height={59}
                  className="flex md:hidden pt-[17px] pb-[12px]"
                />
              </div>
              <div className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] text-center align-middle">
                <p> {item.title}</p>
              </div>
              <div className="hidden md:flex text-[#333333] font-samim font-normal text-[16px] leading-[24px] tracking-[0.01em] text-justify align-middle">
                <p>{item.explain}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
