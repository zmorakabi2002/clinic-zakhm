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
    <div className="relative bg-[#043249] w-full h-[553px] mt-[159px]  ">
      <div className=" absolute w-full flex justify-between z-10 px-[40px] pt-[36px] pb-[31px] text-[#FFFFFF]">
        <div className="text-center font-samim font-bold text-[20px] leading-[38px] tracking-[0.01em] align-middle ">
          <p className="">هدف ما</p>
          <p className="">ما سلامتی و جوانی را به شما هدیه می دهیم</p>
        </div>
        <div className="text-center font-samim font-bold text-[20px] leading-[38px] tracking-[0.01em] align-middle ">
          <p className="text-center">ساعات کاری</p>
          <p className="">
            روزهای زوج: 8:00 الی 18:00 | روزهای فرد: 10:00 الی 20:00
          </p>
        </div>
      </div>
      <Image
        src={"/images/footer-logo.svg"}
        width={134}
        height={134}
        alt="bale1"
        className="absolute self-center left-1/2 -translate-x-1/2 w-[9vw] h-[9vw] "
      />
      <Image
        src={"/images/Vector.svg"}
        width={100}
        height={143}
        alt="bale"
        className="hidden md:flex w-full z-0 "
      />
      <div className="flex justify-around text-[#FFFFFF] gap-[154px] pt-[47px]">
        <div className="flex flex-col w-[377px] gap-[22px]">
          <div className="font-samim font-bold text-[20px] leading-[38px] tracking-[0.01em] text-right align-middle">
            <p>ارتباط با ما</p>
          </div>
          <div className="font-[Samim] font-normal not-italic text-[18px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <div className="flex gap-[12px]">
              {" "}
              <Image
                src={"/images/location.svg"}
                alt=""
                width={34}
                height={34}
              />{" "}
              <p>
                شیراز، صدرا، خیابان امام، نبش خیابان مهرزاد، ساختمان بنیامین،
                طبقه سوم، واحد 9
              </p>
            </div>
          </div>
          <div className=" font-[Samim] font-normal not-italic text-[18px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <div className="flex gap-[12px]">
              {" "}
              <Image
                src={"/images/call.svg"}
                alt="call"
                width={34}
                height={34}
              />
              <p>071-36448965</p>
            </div>
          </div>
          <div className="font-[Samim] font-normal not-italic text-[18px] leading-[24px] tracking-[0.01em] text-right align-middle">
            <div className="flex gap-[12px]">
              {" "}
              <Image
                src={"/images/telephone.svg"}
                alt=""
                width={34}
                height={34}
              />{" "}
              <p> 09170628816 </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[22px] ">
          <div className="font-[Samim] font-bold not-italic text-[20px] leading-[38px] tracking-[0.01em] text-right align-middle ">
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
