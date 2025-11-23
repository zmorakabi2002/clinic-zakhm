"use client";
import Image from "next/image";
import bg from "../../../../public/images/about-bg.svg";
import ButtonRes from "@/components/common/button";
import { useRouter } from "next/navigation";

export default function Aboutsection() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/aboutUs");
  };
  const handleClickCon = () => {
    router.push("#Footerid");
  };
  const styling = {
    backgroundImage: `url(${bg.src})`,
    width: "100%",
    height: "100%",
  };
  return (
    <section
      className=" w-full h-[684px] overflow-hidden flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={styling}
    >
      <div className="lg:pr-[65px] md:w-full w-89 lg:flex lg:flex-row lg:gap-7 flex flex-col lg:items-start items-center lg:justify-between justify-center h-full md:mt-[5.19rem] mt-6.5 ">
        <div className="md:w-lg w-89 flex flex-col md:gap-0 gap-6 lg:text-right text-center ">
          <div>
            <h2 className="font-[Samim] md:text-[2rem] text-[1.5rem] font-bold text-[#202b37] md:mb-8 md:leading-11 leading-10 tracking-[0.0125rem]">
              درباره ما
            </h2>
          </div>
          <div className="md:w-lg w-[356px]">
            <p className="font-[Samim] font-normal md:text-[1.25rem] text-[0.875rem] md:leading-11 leading-6 md:mb-4.5 tracking-[0.0125rem] text-justify text-[#414E62] ">
              کلینیک زخم نیک با بهره‌گیری از ارائه‌ی درمان‌های نوین و علمی، تیمی
              مجرب از پزشکان، پرستاران و کارشناسان زخم، تلاش می‌کند تا با
              استفاده از جدیدترین روش‌ها و فناوری‌های روز دنیا، بهترین نتیجه‌ی
              درمانی را برای بیماران خود فراهم کند. <br />
              در این مرکز، درمان بر اساس نوع زخم، شرایط عمومی بدن و عوامل
              زمینه‌ای، به‌صورت اختصاصی و مرحله‌به‌مرحله برنامه‌ریزی می‌شود.
              <br />
              هدف ما تنها ترمیم زخم نیست؛ بلکه بازگرداندن سلامت، آسایش و کیفیت
              زندگی به بیماران است.
            </p>
          </div>
          <div className="lg:flex hidden lg:justify-start justify-center gap-8 mt-auto ">
            <ButtonRes
              lable={" مطالعه بیشتر"}
              type="second"
              onClickButton={handleClick}
            />
            <ButtonRes lable={"تماس با ما"} onClickButton={handleClickCon} />
          </div>
        </div>
        {/* ستون چپ: تصویر */}
        <div>
          <Image
            src="/images/aboutclinic.jpg"
            alt="تیم کلینیک زخم نیک"
            width={680}
            height={460}
            className="object-cover ml-0 md:mt-21.5 mt-6 lg:mb-0 mb-6 "
            priority
          />
          <div className="lg:hidden flex lg:justify-start justify-center gap-8 mt-auto ">
            <ButtonRes
              lable={" مطالعه بیشتر"}
              type="second"
              onClickButton={handleClick}
            />
            <ButtonRes lable={"تماس با ما"} onClickButton={handleClickCon} />
          </div>
        </div>
      </div>
    </section>
  );
}
