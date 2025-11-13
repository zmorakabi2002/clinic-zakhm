"use client";
import Image from "next/image";
import ButtonRes from "@/components/common/button";
import ServicesCard from "@/components/common/serviceCard";
import WhyCard from "@/components/common/whyCard";
export default function Page() {
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
  return (
    <div className="flex flex-col gap-[64px] ">
      {/* heroSection */}
      <section className=" w-full h-[832px]  ">
        <div className="bg-[url('/images/bg_aboutus.jpg')] w-full h-[832px] bg-cover opacity-35 bg-repeat-round absolute z-0"></div>
        <div className="relative flex flex-col items-center gap-[32px] pt-[353px] px-[143px]">
          <div className="flex flex-col gap-[32px] items-center">
            <p className="font-bold text-[32px] leading-[44px] tracking-[0.01em] text-center">
              کلینیک پزشکی نیک دکتر سید هدایت حسینی{" "}
            </p>
            <p className=" text-[24px] leading-[44px] tracking-[0.01em]">
              ما علم و فناوری را در کنار هم قرار داده‌ایم تا زخم‌های مزمن را
              درمان و کیفیت زندگی بیماران را بازگردانیم.{" "}
            </p>
            <p className="font-bold text-[38px] leading-[44px] tracking-[0.015em] text-center">
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
      <section className="px-[65px] ">
        <p className="font-bold text-[32px] leading-[44px] tracking-[0.01em] text-center pb-[20px]">
          درباره کلینیک زخم نیک
        </p>
        <p className="font-bold text-[20px] leading-[38px] tracking-[0.01em] text-center text-[#637083] pb-[32px]">
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
      <section className="px-[65px]  ">
        <p className="font-bold text-[32px] leading-[44px] tracking-[0.01em] text-center">
          خدمات کلینیک زخم نیک
        </p>
        <p className="font-bold  text-[20px] leading-[38px] tracking-[0.01em] text-center text-[#637083]">
          ما در کلینیک زخم نیک، به درمان زخم‌های مزمن با استفاده از روش‌ های
          نوین و مبتنی بر علم روز دنیا می‌پردازیم. این درمان‌ها شامل موارد زیر
          می‌باشند:
        </p>
        <div className="flex gap-[22px] justify-center pt-[32px] ">
          {services.map((item, index) => (
            <ServicesCard
              key={`${index}-${item.name}`}
              cardData={item}
              classStyle="bg-[#DDF2FD] border-[#DDF2FD] shadow-[0_0_11.7px_0_#00000030] "
            />
          ))}
        </div>
      </section>
      {/* Video  */}
      <section className="flex px-[65px] ">
        <div>
          <p className="font-[Samim] font-bold text-[32px] leading-[44px]  text-center">
            تخصص، تجربه و دقت در درمان
          </p>
          <p className="font-[Samim] font-bold text-[20px] leading-[38px] tracking-[1%] text-justify">
            درمان تمام زخم‌ها در کلینیک نیک تحت نظر تیم پزشکی حرفه‌ای انجام
            می‌شود. ما از جدیدترین تجهیزات و فناوری‌های درمانی استفاده می‌کنیم
            تا مسیر بهبودی بیماران سریع‌تر و مؤثرتر باشد. هدف اصلی ما، بهبود
            کیفیت زندگی بیماران و تسریع در روند بهبودی آنهاست. ما معتقدیم که هر
            فرد شایسته درمانی مؤثر، جامع و شخصی‌سازی شده است که نه تنها به
            بهبودی جسمانی بلکه به بازگشت به زندگی عادی و راحت نیز کمک کند.
          </p>
        </div>

        <video
          width="620"
          height="240"
          controls
          preload="none"
          className="px-[65px] "
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
      <section className="px-[65px] ">
        <div>
          {Whycard.map((item, index) => (
            <WhyCard
              key={`why-${index}`}
              cardData={item}
              classStyle="md:w-[232px] md:h-[214px] w-[167px] h-[139pxS]"
            />
          ))}
        </div>
      </section>
      {/* Location */}
      <section className="px-[65px] ">
        <p> موقعیت مکانی </p>
        <p>
          کلینیک زخم نیک در شهر شیراز شهرجدید صدرا واقع شده است و با دسترسی آسان
          به امکانات درمانی و خدمات بهداشتی، آماده ارائه بهترین خدمات به شما
          عزیزان می‌باشد.
        </p>
      </section>
      {/* More Information */}
      <section className="px-[65px] ">
        <p>برای اطلاعات بیشتر یا رزرو نوبت، لطفاً با ما تماس بگیرید </p>
        <p>
          ما در کلینیک زخم نیک، منتظر خدمت‌رسانی به شما عزیزان هستیم تا گامی
          مؤثر در درمان و بهبودی شما برداریم.{" "}
        </p>
        <ButtonRes />
      </section>
    </div>
  );
}
