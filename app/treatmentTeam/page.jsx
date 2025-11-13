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
    name: "دکتر علی خشنودی",
    Expertise: "متخصص ترمیم بافت",
    Description: "متخصص در ترمیم بافت‌های آسیب‌دیده با بیش از 5 سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: " شنبه ",
      toDay: " دوشنبه ",
      fromTime: " 8 صبح  ",
      toTime: " 10 شب  ",
    },
    specializedAreas: ["ترمیم بافت ", "زخم بستر", "زخم مزمن"],
    degree: {
      major: " دکترای تخصصی ترمیم بافت ",
      university: "دانشگاه علوم پزشکی تهران",
    },
  },
  {
    id: 2,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر محمد رضایی",
    Expertise: "متخصص زخم دیابتی",
    Description:
      "متخصص در درمان زخم‌های دیابتی و ترمیم بافت‌های آسیب‌دیده با بیش از 3 سال تجربه",
    workHistory: 3,
    attendanceTime: {
      fromDay: " دوشنبه ",
      toDay: " چهارشنبه ",
      fromTime: " 10 صبح ",
      toTime: " 6 عصر ",
    },
    specializedAreas: ["زخم دیابتی", "زخم مزمن", "زخم بستر"],
    degree: {
      major: " لیسانس زخم دیابتی  ",
      university: " دانشگاه علوم پزشکی اصفهان ",
    },
  },
  {
    id: 3,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر رضا سلطانی ",
    Expertise: "متخصص ترمیم بافت",
    Description:
      "متخصص در درمان زخم‌های بستر و ترمیم بافت‌های آسیب‌دیده با بیش از 1 سال تجربه",
    workHistory: 1,
    attendanceTime: {
      fromDay: " چهارشنبه  ",
      toDay: " شنبه ",
      fromTime: " 12 ظهر ",
      toTime: " 4 عصر ",
    },
    specializedAreas: ["زخم بستر", "ترمیم بافت", "زخم مزمن"],
    degree: {
      major: " دیپلم ترمیم بافت  ",
      university: " دانشگاه علوم پزشکی شیراز ",
    },
  },
  {
    id: 4,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر محمدعلی کشاورز",
    Expertise: "متخصص زخم بستر",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از 4 سال تجربه",
    workHistory: 4,
    attendanceTime: {
      fromDay: " شنبه ",
      toDay: " سه شنبه ",
      fromTime: " 9 صبح ",
      toTime: " 5 عصر ",
    },
    specializedAreas: ["زخم مزمن", "ترمیم بافت", "زخم بستر"],
    degree: {
      major: " دکترای تخصصی زخم بستر  ",
      university: " دانشگاه علوم پزشکی شیراز ",
    },
  },
  {
    id: 5,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علی محمد همایون",
    Expertise: "متخصص ترمیم بافت",
    Description: "متخصص در درمان بافت‌های آسیب‌دیده با بیش از 5 سال تجربه",
    workHistory: 5,
    attendanceTime: {
      fromDay: " دوشنبه ",
      toDay: " پنج شنبه ",
      fromTime: " 5 عصر ",
      toTime: " 10 شب ",
    },
    specializedAreas: ["ترمیم بافت", "زخم دیابتی", "زخم مزمن"],
    degree: {
      major: " دیپلم ترمیم بافت  ",
      university: " دانشگاه علوم پزشکی تهران ",
    },
  },
  {
    id: 6,
    imgSrc: "/images/professionalDoctor.jpg",
    name: "دکتر علیرضا رزمی",
    Expertise: "متخصص زخم مزمن",
    Description:
      "متخصص در درمان زخم‌های مزمن و ترمیم بافت‌های آسیب‌دیده با بیش از 8 سال تجربه",
    workHistory: 8,
    attendanceTime: {
      fromDay: " یکشنبه ",
      toDay: " سه شنبه ",
      fromTime: " 9 صبح ",
      toTime: " 9 شب ",
    },
    specializedAreas: ["زخم مزمن", "زخم دیابتی", "زخم بستر"],
    degree: {
      major: " دکترای تخصصی زخم مزمن  ",
      university: " دانشگاه علوم پزشکی اصفهان ",
    },
  },
];

export default function Home() {
  const [isModal, setISModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleShowModal = (e, item) => {
    e.preventDefault();
    setModalData(item);
    setISModal(true);
  };
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
              onShowModal={(e) => handleShowModal(e, item)}
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
      {isModal && (
        <DrBox onPageClick={() => setISModal(false)} data={modalData} />
      )}
    </div>
  );
}
