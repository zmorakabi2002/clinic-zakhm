import { useState } from "react";
export default function TelInput({
  lable,
  placeHolder,
  inputValue,
  inputChange,
  classStyle = "",
}) {
  const cityNumCode = [
    { id: 1, city: "IR", code: "+98" },
    { id: 1, city: "IQ", code: "+964" },
    { id: 1, city: "USA", code: "+1" },
    { id: 1, city: "TK", code: "+90" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const [inputCodeValue, setInputCodevalue] = useState("");
  return (
    <div className="">
      <p className="pb-[8px] font-iransans font-medium md:text-[18px] text-[16px] leading-[24px] tracking-[1%] text-right text-[#344051]">
        {lable}
      </p>
      <div className="flex gap-[6px]">
        <input
          type="tel"
          value={inputValue}
          maxLength={10}
          onChange={inputChange}
          placeholder={placeHolder}
          className={`border-[1.5px] rounded-[50px] border-[#CED2DA] pt-1  px-[20px] placeholder:text-[18px] placeholder:text-[#637083] placeholder:flex placeholder: ${classStyle}`}
        />
        <div className="w-[65px] opacity-100 rounded-[20px] relative text-[15px]">
          <input
            type="text"
            value={inputCodeValue}
            onChange={() => {}}
            placeHolder={"+98"}
            className="w-full h-full rounded-[20px] opacity-100 pt-1  px-[10px] border placeholder:text-[18px] placeholder:text-[#637083]  border-[#CED2DA] placeholder:flex placeholder:items-center placeholder:justify-center "
            onClick={(e) => setIsOpen(!isOpen)}
          />
          {isOpen === true && (
            <div className=" absolute top-[65px] w-full border-[1.5px] border-[#CED2DA] rounded-[10px] flex flex-col gap-3 bg-white p-1">
              {cityNumCode.map((item, index) => {
                return (
                  <div
                    key={`${index}-cityNumCode`}
                    className="hover:bg-[#efefef] cursor-pointer rounded"
                    onClick={(e) => setInputCodevalue(item.code)}
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
