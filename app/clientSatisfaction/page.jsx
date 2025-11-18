"use cleint";
import SatisfactionCard from "@/components/common/satisfactionCard";
import UserOpinion from "@/components/common/userOpinion";
const satData = [
  {
    id: 1,
    imgSrc: "/images/satis1.png",
    title: "۱۵ سال",
    text: "تجربه تخصصی",
  },
  {
    id: 2,
    imgSrc: "/images/satis2.png",
    title: "۹۵٪",
    text: "میزان رضایت بیماران",
  },
  {
    id: 3,
    imgSrc: "/images/satis3.png",
    title: "۳۰۰۰+",
    text: "بیمار درمان‌شده",
  },
];
export default function page() {
  return (
    <section className="md:pt-[182px] pt-[126px] md:px-[65px] px-[26px] ">
      <div className="flex flex-col gap-[22px]">
        <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 text-right text-[#202B37]">
          رضایت مراجعین ما
        </p>
        <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 text-right text-[#637083]">
          تجربه‌ی واقعی بیماران از درمان زخم‌های مزمن در کلینیک زخم نیک
        </p>
      </div>
      <div className="flex flex-wrap gap-[18px] justify-center">
        <video
          width="661"
          height="374"
          controls
          preload="none"
          className=" pt-8 md:w-[371px] md:h-[316px] w-[360px] h-[307px] "
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
        <video
          width="661"
          height="374"
          controls
          preload="none"
          className=" pt-8 md:w-[371px] md:h-[316px] w-[360px] h-[307px] "
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
        <video
          width="661"
          height="374"
          controls
          preload="none"
          className=" pt-8 md:w-[371px] md:h-[316px] w-[360px] h-[307px] "
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
      </div>
      <div className="flex flex-wrap gap-[29px] justify-center py-[68px]">
        {satData.map((item, index) => (
          <SatisfactionCard key={`${index}-satisfaction`} cardData={item} />
        ))}
      </div>
      <div>
        <UserOpinion />
      </div>
    </section>
  );
}
