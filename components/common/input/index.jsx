import { useState } from "react";

export default function Input({
  lable,
  placeHolder,
  inputValue,
  inputChange,
  errors,
  classStyle = "md:w-[337px] md:h-[60px] w-[360px] h-[52px] ",
}) {
  return (
    <div className=" flex flex-col gap-2 ">
      <p className=" font-medium md:text-[18px] text-[16px] leading-6 tracking-[1%] text-right text-[#344051]">
        {" "}
        {lable}{" "}
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder={placeHolder}
        errors={errors}
        className={` border-[1.5px] rounded-[50px] border-[#CED2DA] py-[18px] px-5 md:placeholder:text-[18px] placeholder:text-[14px] placeholder:leading-6 placeholder:text-right placeholder:tracking-[1%] placeholder:text-[#637083] ${classStyle} `}
      />
    </div>
  );
}
