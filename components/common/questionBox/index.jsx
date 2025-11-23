"use client";
import Image from "next/image";
import { useState } from "react";

export default function QuestionBox({ lable, explain }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="md:w-[615.75px] w-[356px] flex flex-col justify-between items-center opacity-100 md:rounded-[42px] rounded-[76px] md:pr-8 pr-[18px] py-[17px] bg-[#FFF0E5]"
      onClick={(e) => {
        setIsOpen(!isOpen);
      }}
    >
      <div className=" w-full flex justify-between font-samim font-bold text-[16px] md:text-[20px] text-[#344051] md:leading-[38px] leading-6 text-right align-middle">
        <p>{lable}</p>
        <div className="flex justify-center  md:pl-8 pl-4 ">
          {isOpen ? (
            <Image
              src={"/images/arrow-down.svg"}
              alt="arrow"
              width={24}
              height={24}
              className=" rotate-180 "
            />
          ) : (
            <Image
              src={"/images/arrow-down.svg"}
              alt="arrow"
              width={24}
              height={24}
              // className=""
            />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen === true
            ? "w-full text-right wrap-break-word whitespace-normal pt-3 text-[#2e2e2eb5]"
            : "hidden"
        }`}
      >
        <p>{explain}</p>
      </div>
    </div>
  );
}
