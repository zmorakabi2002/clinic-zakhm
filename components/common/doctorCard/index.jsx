"use client";
import Image from "next/image";
import ButtonRes from "../button";

export default function DoctorCard({ doctorCardData, onShowModal }) {
  return (
    <div className="md:w-[327px] w-[310px] md:h-[418px] h-[336px] px-6 py-[22px] flex flex-col justify-between items-center text-justify bg-[#F9FAFB] border border-[#E4E7EC] rounded-[22px] shadow-[0px_0px_6.8px_0px_#00000025] ">
      <div className="flex flex-col justify-center items-center md:gap-3 gap-2 ">
        <Image
          src={doctorCardData?.imgSrc}
          alt="doctorImage"
          width={120}
          height={120}
          className="rounded-[100%] border-2 border-[#086391] md:flex hidden "
        />
        <Image
          src={doctorCardData?.imgSrc}
          alt="doctorImage"
          width={100}
          height={100}
          className="rounded-[100%] border-2 border-[#086391] md:hidden  "
        />
        <p className="font-[samim] font-bold md:text-[24px] text-[20px] text-[#202B37]">
          {doctorCardData?.name}
        </p>
        <p className="font-[samim] font-normal md:text-[14px] text-[12px] text-[#F9FAFB] md:px-3 px-2.5 md:py-2 py-1 bg-[#086391] rounded-[36px] ">
          {" "}
          {doctorCardData?.Expertise}{" "}
        </p>
        <p className="font-[samim] font-normal md:text-[18px] text-[14px] leading-6 text-[#414E62]">
          {" "}
          {doctorCardData?.Description}{" "}
        </p>
      </div>

      <ButtonRes
        lable={"مشاهده جزئیات"}
        classStyle=" w-[100%] h-[40px] "
        onClickButton={onShowModal}
      />
    </div>
  );
}
