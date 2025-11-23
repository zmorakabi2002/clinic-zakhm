"use client";
import { useState, useRef, useEffect } from "react";

export default function TelInput({
  lable,
  placeHolder,
  inputChange,
  classStyle = "",
  maxNum,
  inputValue,
}) {
  const dropDownRef = useRef();
  const cityNumCode = [
    { id: 1, city: "IR", code: "+98" },
    { id: 1, city: "IQ", code: "+964" },
    { id: 1, city: "USA", code: "+1" },
    { id: 1, city: "TK", code: "+90" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);
  const [inputCodeValue, setInputCodevalue] = useState("");
  return (
    <div ref={dropDownRef} className="">
      <p className="pb-2 font-iransans font-medium md:text-[18px] text-[16px] leading-6 tracking-[1%] text-right text-[#344051]">
        {lable}
      </p>
      <div className="flex gap-1.5">
        <input
          type="tel"
          maxLength={maxNum}
          onChange={inputChange}
          value={inputValue}
          placeholder={placeHolder}
          className={`border-[1.5px] rounded-[50px] border-[#CED2DA] pt-1  px-5 md:placeholder:text-[18px] placeholder:text-[14px] placeholder:text-[#637083] placeholder:flex placeholder: ${classStyle}`}
        />
        <div className="w-[65px] opacity-100 rounded-[20px] relative text-[15px]">
          <input
            type="text"
            value={inputCodeValue}
            onChange={() => {}}
            placeholder={"+98"}
            className="md:w-[65px] md:h-[60px] w-[57px] h-[52px]  text-center rounded-[20px] opacity-100 pt-1 px-2.5 border md:placeholder:text-[18px] placeholder:text-[14px] placeholder:text-[#637083] border-[#CED2DA] placeholder:flex placeholder:items-center placeholder:justify-center "
            onClick={(e) => setIsOpen(!isOpen)}
          />
          {isOpen === true && (
            <div className=" absolute top-[65px] w-full border-[1.5px] border-[#CED2DA] rounded-[10px] flex flex-col gap-3 bg-white p-1 z-1">
              {cityNumCode.map((item, index) => {
                return (
                  <div
                    key={`${index}-cityNumCode`}
                    className="hover:bg-[#efefef] cursor-pointer rounded"
                    onClick={(e) => {
                      setInputCodevalue(item.code), setIsOpen(false);
                    }}
                  >
                    {item.code}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
