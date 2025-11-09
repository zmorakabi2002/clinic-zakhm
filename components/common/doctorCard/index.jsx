import Image from "next/image";
import ButtonRes from "../button";

export default function DoctorCard({ doctorCardData }) {
  return (
    <div className="w-[327px] px-[24px]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={doctorCardData?.imgSrc}
          alt="doctorImage"
          width={120}
          height={120}
          className="rounded-[100%]  "
        />
        <p className="text-black"> {doctorCardData?.name} </p>
        <p className="text-black"> {doctorCardData?.Expertise} </p>
        <p className="text-black"> {doctorCardData?.Description} </p>
      </div>

      <ButtonRes lable={"مشاهده جزئیات"} />
    </div>
  );
}
