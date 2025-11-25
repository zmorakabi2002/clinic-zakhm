"use client";

import Image from "next/image";
import { useData } from "@/app/context/dataContext";
import { useParams } from "next/navigation";
import UserOpinion from "@/components/common/userOpinion";

export default function page() {
  const params = useParams();
  const { sampleWounds } = useData();
  const items = sampleWounds.find((i) => i.id === params.id);

  if (!items) return <p> آیتم مورد نظر یافت نشد</p>;

  return (
    <section>
      <div className="md:px-[65px] px-[26px]">
        <div className=" flex flex-col gap-[22px] md:pt-[182px] pt-[126px] pb-8">
          <p className="font-[samim] font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 text-[#202B37]">
            نمونه زخم‌های بهبود یافته در کلینیک نیک
          </p>
          <p className="font-[samim] font-bold md:text-[20px] text-[16px] leading-6 md:leading-[38px] text-[#637083]">
            نتایج واقعی درمان زخم‌های مزمن توسط تیم تخصصی ما
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <Image
              src={"/images/article.jpg"}
              alt="article"
              width={563}
              height={357}
              className="md:w-[563px] md:h-[357px] w-[360px] h-[212px]"
            />
            <p className="font-samim font-bold md:text-[24px] text-[20px] leading-9 md:leading-11 text-[#202B37] text-right">
              قبل از درمان{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image
              src={"/images/article.jpg"}
              alt="article"
              width={563}
              height={357}
              className="md:w-[563px] md:h-[357px] w-[360px] h-[212px]"
            />
            <p className="font-samim font-bold md:text-[24px] text-[20px] leading-9 md:leading-11 text-[#202B37] text-right">
              بعد از درمان{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pb-8 pt-[52px]">
        <p className="font-samim font-bold md:text-[32px] text-[24px] leading-10 md:leading-11 text-center text-[#202B37]">
          {items.title}
        </p>
        <p className="font-samim font-normal md:text-[18px] text-[16px] md:leading-[30px] leading-6 text-justify md:px-[65px] px-[26px] text-[#414E62]">
          دختری 15 ساله با ناهنجاری مادرزادی پای چماقی که با یک زخم عفونی عمیق
          کف پا در پای چپش مواجه شده بود که زندگی اجتماعی و رفتن به مدرسه را
          برای او مختل کرده بود. اندازه زخم 60 میلی متر در 40 میلی متر با عمق
          حدود 30 میلی متر بود. پس از 20 جلسه مدیریت زخم در کلینیک زخم نیک شامل
          کنترل عفونت، دبریدمان، پانسمان مدرن، کفش آفلودینگ و وکیوم تراپی، زخم
          به طور کامل بهبود یافت. اکنون او خوشحال است زیرا می تواند به مدرسه
          برگردد و با دوستانش بازی کند.
        </p>
      </div>
      <UserOpinion />
    </section>
  );
}
