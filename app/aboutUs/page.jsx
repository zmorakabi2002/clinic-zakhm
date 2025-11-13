"use client";
import Image from "next/image";
import ButtonRes from "@/components/common/button";
import ServicesCard from "@/components/common/serviceCard";
import WhyCard from "@/components/common/whyCard";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const services = [
    {
      title: "زخم سوختگی",
      text: "درمان تخصصی انواع سوختگی با جدیدترین روش‌ها برای کاهش عفونت و بازسازی پوست.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "میخچه",
      text: "برداشت میخچه به‌صورت بدون درد با روش‌های غیرتهاجمی و تجهیزات نوین کلینیکی.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "زخم دیابتی",
      text: "درمان مرحله‌به‌مرحله زخم پای دیابتی برای جلوگیری از عفونت و بهبود سریع‌تر.",
      img: "/images/aboutclinic.jpg",
    },
    {
      title: "بیماری پسوریازیس",
      text: "کنترل التهاب و پوسته‌ریزی ناشی از بیماری‌های خودایمنی با روش‌های تخصصی پوست.",
      img: "/images/aboutclinic.jpg",
    },
  ];
  const Whycard = [
    {
      id: 1,
      name: "Card1",
      title: "پزشکان مجرب",
      url: "/images/why1.svg",
    },
    {
      id: 2,
      name: "Card2",
      title: "مسئولیت‌پذیری",
      url: "/images/why2.svg",
    },
    {
      id: 3,
      name: "Card3",
      title: "همکاران با سابقه عالی",
      url: "/images/why3.svg",
    },
    {
      id: 4,
      name: "Card4",
      title: "ارتباط دوستانه",
      url: "/images/why4.svg",
    },
  ];
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/appointmentBooking");
  };
  // const handleClickservices = (e) => {
  //   e.preventDefault();
  //   router.push("/services");
  // };

  return (
    <div className="flex flex-col md:gap-16 gap-[52px] ">
      {/* heroSection */}
      <section className=" w-full md:h-[832px] ">
        <div className="md:bg-[url('/images/bg_aboutus.jpg')] bg-none w-full h-[832px] bg-cover opacity-35 bg-repeat-round absolute z-0"></div>
        <div className="relative flex flex-col items-center md:gap-8 gap-5 md:pt-[353px] pt-[163px] md:px-[143px] px-[26px]">
          <div className="flex flex-col md:gap-8 gap-5 items-center">
            <p className="font-bold md:text-8 text-[24px] md:leading-11 leading-10ntracking-[0.01em] text-[#202B37] text-center">
              کلینیک پزشکی نیک دکتر سید هدایت حسینی{" "}
            </p>
            <p className=" font-bold md:text-[24px] text-[24px] text-justify md:leading-11 leading-9 tracking-[0.01em] md:text-[#202B37] text-[#414E62] ">
              ما علم و فناوری را در کنار هم قرار داده‌ایم تا زخم‌های مزمن را
              درمان و کیفیت زندگی بیماران را بازگردانیم.{" "}
            </p>
            <p className="font-bold md:text-[38px] text-[24px] leading-11 tracking-[0.015em] text-center text-[#202B37]">
              سلامتی شما تمام هدف ماست{" "}
            </p>
          </div>
          <div className="">
            <ButtonRes
              lable={"مشاهده خدمات"}
              classStyle="md:w-[182px] w-[144px] md:h-[48px] h-[40px]"
              // onClickButton={}
            />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="md:px-[65px] px-[26px] ">
        <p className="font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 tracking-[0.01em] text-center pb-5">
          درباره کلینیک زخم نیک
        </p>
        <p className="font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 tracking-[0.01em] text-center text-[#637083] pb-8">
          کلینیک زخم نیک در شهر شیراز، با هدف ارائه خدمات درمانی پیشرفته و تخصصی
          در زمینه درمان زخم‌های مزمن است.
          <br />
          این کلینیک، با تیم درمان پزشکی با تجربه و متخصص در حوزه زخم‌ها و ترمیم
          بافت، به عنوان یک مرکز معتبر در زمینه درمان زخم‌های دیابتی، زخم‌های
          بستر، زخم‌های سوختگی، زخم های جراحی، زخم های عفونی و زخم‌های عروقی
          شناخته می‌شود.
        </p>

        <Image
          src={"/images/aboutclinic.jpg"}
          width={1150}
          height={766.6666870117188}
          alt="aboutUsImage"
          className="w-full"
        />
      </section>
      {/* Services  */}
      <section className="md:px-[65px] px-[26px] ">
        <p className="font-bold md:text-[32px] text-[24px] md:leading-[44px] pb-[20px] leading[40px] tracking-[0.01em] text-center">
          خدمات کلینیک زخم نیک
        </p>
        <p className="font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[0.01em] text-center text-[#637083]">
          ما در کلینیک زخم نیک، به درمان زخم‌های مزمن با استفاده از روش‌ های
          نوین و مبتنی بر علم روز دنیا می‌پردازیم. این درمان‌ها شامل موارد زیر
          می‌باشند:
        </p>
        <div className="flex flex-wrap md:gap-[22px] gap-[12px] justify-center pt-[32px] ">
          {services.map((item, index) => (
            <ServicesCard
              key={`${index}-${item.name}`}
              cardData={item}
              classStyle="bg-[#DDF2FD] border-[#DDF2FD] shadow-[0_0_11.7px_0_#00000030] md:w-[271px] w-[174px] md:h-[343px] h-[284px]"
              isResText={true}
              ImageS_Desktop={139}
              ImageS_Mobile={110}
            />
          ))}
        </div>
      </section>
      {/* Video  */}
      <section className="flex flex-col md:flex md:flex-row gap-8 md:px-[65px] px-[26px]">
        <div className="flex flex-col gap-5">
          <p className="font-[Samim] font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 text-center">
            تخصص، تجربه و دقت در درمان
          </p>
          <p className="font-[Samim] font-bold md:text-5 text-[16px] leading-[38px] text-[#637083] text-justify ">
            درمان تمام زخم‌ها در کلینیک نیک تحت نظر تیم پزشکی حرفه‌ای انجام
            می‌شود. ما از جدیدترین تجهیزات و فناوری‌های درمانی استفاده می‌کنیم
            تا مسیر بهبودی بیماران سریع‌تر و مؤثرتر باشد. هدف اصلی ما، بهبود
            کیفیت زندگی بیماران و تسریع در روند بهبودی آنهاست. ما معتقدیم که هر
            فرد شایسته درمانی مؤثر، جامع و شخصی‌سازی شده است که نه تنها به
            بهبودی جسمانی بلکه به بازگشت به زندگی عادی و راحت نیز کمک کند.
          </p>
        </div>
        <video
          width="661"
          height="374"
          controls
          preload="none"
          className=" pt-8 md:w-[661px] md:h-[374px] w-[360px] h-[203px] "
        >
          <source src="/images/about.mp4" type="video/mp4" />
          {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
          Your browser does not support the video tag.
        </video>
      </section>
      {/* Why Clinic */}
      <section className=" md:px-[65px] px-[26px] ">
        <div className="flex flex-col items-center gap-5">
          <p className="font-[Samim] font-bold md:text-8 text-6 md:leading-11 leading-10 text-center">
            چرا کلینیک درمان زخم نیک را انتخاب کنید؟
          </p>
          <p className="font-[Samim] font-bold md:text-5 text-[16px] leading-[38px] text-[#637083] text-center ">
            تیم ما همیشه آماده پاسخگویی و ارائه خدمات با کیفیت بالاست.
          </p>
        </div>
        <div className="flex flex-wrap md:gap-[74px] gap-[26px] pt-8 justify-center ">
          {Whycard.map((item, index) => (
            <WhyCard
              key={`why-${index}`}
              cardData={item}
              classStyle="md:w-[232px] md:h-[214px] w-[167px] h-[139px]"
            />
          ))}
        </div>
      </section>
      {/* Location */}
      <section className="md:px-[65px] md:px-[65px] px-[26px] ">
        <p className="font-[Samim] font-bold md:text-8 text-[24px] md:leading-11 leading-10">
          {" "}
          موقعیت مکانی{" "}
        </p>
        <p className="font-[Samim] font-bold md:text-5 text-[16px] md:leading-[38px] leading-6 text-[#637083] text-justify">
          کلینیک زخم نیک در شهر شیراز شهرجدید صدرا واقع شده است و با دسترسی آسان
          به امکانات درمانی و خدمات بهداشتی، آماده ارائه بهترین خدمات به شما
          عزیزان می‌باشد.
        </p>
      </section>
      {/* More Information */}
      <section className="md:px-[65px] px-[26px] flex flex-col justify-center items-center gap-5 md:pb-[114px] pb-[79px] ">
        <p className="font-[Samim] font-bold md:text-8 text-[24px] md:leading-11 leading-10 text-center">
          برای اطلاعات بیشتر یا رزرو نوبت، لطفاً با ما تماس بگیرید{" "}
        </p>
        <p className="font-[Samim] font-bold md:text-5 text-[16px] md:leading-[38px] leading-6 text-[#637083] text-center">
          ما در کلینیک زخم نیک، منتظر خدمت‌رسانی به شما عزیزان هستیم تا گامی
          مؤثر در درمان و بهبودی شما برداریم.{" "}
        </p>
        <ButtonRes
          lable={"دریافت نوبت"}
          secondIcon={"/images/time.svg"}
          onClickButton={handleClick}
        />
      </section>
    </div>
  );
}
