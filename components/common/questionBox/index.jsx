import Image from "next/image";
import { useState } from "react";

export default function QuestionBox({ lable, explain }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="md:w-[615.75px] w-[356px] flex flex-col justify-between items-center opacity-100 md:rounded-[42px] rounded-[76px] md:px-8 px-[18px] py-[17px] bg-[#FFF0E5]"
      onClick={(e) => {
        setIsOpen(!isOpen), console.log("state is : ", isOpen);
      }}
    >
      <div className=" w-full flex justify-between font-samim font-bold text-[16px] md:text-[20px] text-[#344051] leading-[38px] tracking-[0.01em] text-right align-middle">
        <p>{lable}</p>
        <div className="flex justify-center">
          <Image
            src={"images/arrow-down.svg"}
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen === true
            ? "w-full text-right break-words whitespace-normal pt-3 text-[#2e2e2eb5]"
            : "hidden"
        }`}
      >
        <p>{explain}</p>
      </div>
    </div>
  );
}
