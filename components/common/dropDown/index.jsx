import Image from "next/image";
import { useState } from "react";

export default function DropDown({
  defaultValue,
  labename,
  classStyle = "",
  options,
  onOptionClick,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className=" flex flex-col relative ">
      <p className="font-medium md:text-[18px] text-[16px] text-[#344051] mb-2 placeholder: ">
        {labename}
      </p>
      <button
        className={`px-5 py-[18px] rounded-[50px] border border-[#CED2DA] flex justify-between ${classStyle} ${
          open === true && "rounded-b-none"
        }`}
        onClick={(e) => setOpen(!open)}
      >
        <p className="font-samim font-normal md:text-[18px] text-[14px] text-[#637083] ">
          {selected}
        </p>
        <Image
          src={"/images/arrow-down.svg"}
          alt="dropDown"
          width={24}
          height={24}
          className=" "
        />
      </button>
      <ul
        className={`border-t-0 border border-[#CED2DA] rounded-b-[20px] absolute w-full top-25 ${classStyle} ${
          open === false && "hidden"
        }`}
      >
        {options?.map((item, index) => {
          return (
            <li
              key={`${index}-dropDown`}
              className="md:text-[16px] text-[12px] bg-[#ffffff] text-[#637083] hover:bg-[#e3ebf7] last:rounded-b-[20px] cursor-pointer py-4 px-8 "
              onClick={(e) => {
                setSelected(item.name), setOpen(!open), onOptionClick();
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
