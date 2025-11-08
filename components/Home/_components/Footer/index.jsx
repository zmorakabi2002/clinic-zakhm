import Image from "next/image";
const SocialMedia = [
  {
    id: 1,
    name: "gmail",
    src: "images/gmail.svg",
    url: "",
  },
  {
    id: 2,
    name: "facebook",
    src: "images/facebook.svg",
    url: "",
  },
  {
    id: 3,
    name: "linkedin",
    src: "images/linkdin.svg",
    url: "",
  },
  {
    id: 4,
    name: "telegram",
    src: "images/telegram.svg",
    url: "",
  },
  {
    id: 5,
    name: "whatsapp",
    src: "images/whatsapp.svg",
    url: "",
  },
  {
    id: 6,
    name: "instagram",
    src: "images/instagram.svg",
    url: "",
  },
];
export default function Footer() {
  return (
    <div className="relative bg-[#043249] w-full md:h-[553px] h-[806px] mt-[80px] ">
      <div className=" absolute w-full flex flex-col md:flex-row gap-[24px] justify-between z-10 px-[40px] md:pt-[36px] pt-[61px] pb-[31px] text-[#FFFFFF]">
        <div className=" ">
          <p className="text-center font-samim font-bold  md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] align-middle ">
            هدف ما
          </p>
          <p className="text-center font-samim md:font-bold font-normal md:text-[20px] text-[14px] md:leading-[38px] leading-[24px] tracking-[0.01em] align-middle ">
            ما سلامتی و جوانی را به شما هدیه می دهیم
          </p>
        </div>
        <div className="">
          <p className="text-center font-samim font-bold  md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] align-middle ">
            ساعات کاری
          </p>
          <p className="text-center font-samim md:font-bold font-normal md:text-[20px] text-[14px] md:leading-[38px] leading-[24px] tracking-[0.01em] align-middle">
            روزهای زوج: 8:00 الی 18:00 | روزهای فرد: 10:00 الی 20:00
          </p>
        </div>
      </div>
      <Image
        src={"/images/footer-logo.svg"}
        width={134}
        height={134}
        alt="bale1"
        className="absolute self-center left-1/2 -translate-x-1/2 md:w-[9vw] w-[66px] md:h-[9vw] h-[66px] "
      />
      <Image
        src={"/images/Vector.svg"}
        width={100}
        height={143}
        alt="bale"
        className="hidden md:flex w-full z-0 "
      />
      <div className="flex flex-col md:flex-row justify-around text-[#FFFFFF] md:gap-[154px] gap-[32px] md:pt-[47px] pt-[213px] pr-[33px]">
        <div className="flex flex-col w-[377px] gap-[22px]">
          <div className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <p>ارتباط با ما</p>
          </div>
          <div className="flex  font-[Samim] font-normal not-italic md:text-[18px] text-[14px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <div className="flex justify-between items-center gap-[12px]">
              {" "}
              <Image
                src={"/images/location.svg"}
                alt=""
                width={34}
                height={34}
                className="md:w-[34px] w-[24px] h-[24px] md:h-[34px] "
              />{" "}
              <p>
                شیراز، صدرا، خیابان امام، نبش خیابان مهرزاد، ساختمان بنیامین،
                طبقه سوم، واحد 9
              </p>
            </div>
          </div>
          <div className="flex justify-between font-[Samim] font-normal not-italic md:text-[18px] text-[14px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <div className="flex justify-between items-center gap-[12px]">
              {" "}
              <Image
                src={"/images/call.svg"}
                alt="call"
                width={34}
                height={34}
                className="md:w-[34px] w-[24px] h-[24px] md:h-[34px] "
              />
              <p>071-36448965</p>
            </div>
          </div>
          <div className="flex justify-between font-[Samim] font-normal not-italic md:text-[18px] text-[14px]tracking-[0.01em] text-right align-middle">
            <div className="flex justify-between items-center gap-[12px]">
              {" "}
              <Image
                src={"/images/telephone.svg"}
                alt=""
                width={34}
                height={34}
                className="md:w-[34px] w-[24px] h-[24px] md:h-[34px] "
              />{" "}
              <p> 09170628816 </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[22px] ">
          <div className="font-[Samim] font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] text-right align-middle ">
            <p>شبکه های اجتماعی</p>
          </div>
          <div className="flex gap-[22px] ">
            {SocialMedia.map((item, index) => {
              return (
                <a key={`${index}-${item.name}`} href={item.url}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={24}
                    height={24}
                  ></Image>
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-[Samim] font-bold not-italic text-[20px] leading-[38px] tracking-[0.01em] text-right align-middle">
            <p>اینماد</p>
          </div>
          <div>
            <Image
              src={"/images/inmad.svg"}
              alt=""
              width={173}
              height={173}
              className="pt-[22px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
