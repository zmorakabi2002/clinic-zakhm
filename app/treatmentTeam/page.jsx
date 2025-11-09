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
];
export default function Home() {
  return (
    <div>
      <div className="mb-[22px] pt-[182px] pr-[65px] ">
        <p className="mb-[22px] font-[samim] font-bold text-[32px] text-[#202B37] ">
          {" "}
          تیم درمان کلینیک زخم نیک
        </p>
        <p className="font-[samim] font-bold text-[20px] text-[#637083] ">
          با تیمی از پزشکان و پرستاران مجرب در درمان انواع زخم‌های مزمن همراه
          باشید.
        </p>
      </div>

      <div>
        <DoctorCard doctorCardData={drCard[0]} />
      </div>
    </div>
  );
}
