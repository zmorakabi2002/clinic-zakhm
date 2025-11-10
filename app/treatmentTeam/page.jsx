"use client";

import DoctorCard from "@/components/common/doctorCard";
import Image from "next/image";

const drCard = [
  {
    id: 1,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
  {
    id: 2,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
  {
    id: 3,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
  {
    id: 4,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
  {
    id: 5,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
  {
    id: 6,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col md:items-start items-center px-[65px]">
      <div className="md:w-full w-[360px] md:mb-[22px] mb-[32px] md:pt-[182px] pt-[126px]  flex flex-col gap-[22px] md:items-start items-center ">
        <p className=" font-[samim] font-bold md:text-[32px] text-[24px] text-[#202B37] ">
          {" "}
          تیم درمان کلینیک زخم نیک
        </p>
        <p className="font-[samim] font-bold md:text-[20px] text-[16px] text-center text-[#637083] ">
          با تیمی از پزشکان و پرستاران مجرب در درمان انواع زخم‌های مزمن همراه
          باشید.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-[84.5px] gap-y-[32px] items-center justify-center">
        {drCard.map((item, index) => {
          return (
            <DoctorCard key={`${index}-DoctorCard`} doctorCardData={item} />
          );
        })}
      </div>
    </div>
  );
}
