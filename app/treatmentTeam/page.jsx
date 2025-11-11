"use client";
import Link from "next/link";
import ButtonRes from "@/components/common/button";
import DoctorCard from "@/components/common/doctorCard";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DrBox from "@/components/common/drBoxMdl";
import { useState } from "react";

const drCard = [
  {
    id: 1,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
  {
    id: 2,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
  {
    id: 3,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
  {
    id: 4,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
  {
    id: 5,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
  {
    id: 6,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی رضایی",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از ۱۰ سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: "",
      toDay: "",
      fromTime: "",
      toTime: "",
    },
    specializedAreas: ["sdwsd", "wdwdd", "wdwdwd"],
    degree: { major: "", university: "" },
  },
];

export default function Home() {
  const [isModal, setISModal] = useState(false);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/woundTherapistsLogin");
  };
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
            <DoctorCard
              key={`${index}-DoctorCard`}
              doctorCardData={item}
              onShowModal={() => setISModal(true)}
            />
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[22px] justify-center items-center  text-center mt-[52px] ">
        <p className="font-[samim] font-bold md:text-[32px] text-[24px] text-[#202B37]">
          {" "}
          اگر درمانگر زخم هستید، به تیم ما بپیوندید
        </p>
        <p className="font-[samim] font-bold md:text-[20px] text-[16px] text-[#637083]">
          ما همیشه به دنبال افراد متخصص و با انگیزه برای پیوستن به تیم حرفه ای{" "}
          خود هستیم .
        </p>
        <ButtonRes
          lable={"ثبت نام درمانگران"}
          classStyle="md:w-[198px] md:h-[48px] w-[157px] h-[40px] "
          onClickButton={handleClick}
        />
      </div>
      {isModal && <DrBox onPageClick={() => setISModal(false)} />}
    </div>
  );
}
