import Image from "next/image";
import { useState } from "react";

export default function DropDown({ defaultValue, labename, classStyle = "" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const options = [
    { id: 1, name: "مهندسی کامپیوتر" },
    { id: 2, name: "مهندسی پزشکی" },
    { id: 3, name: "روانشناسی" },
  ];

  return (
    <div className=" flex flex-col relative ">
      <p className="font-medium md:text-[18px] text-[16px] text-[#344051] mb-[8px] placeholder: ">
        {labename}
      </p>
      <button
        className={`px-[20px] py-[18px] rounded-[50px] border-[1px] border-[#CED2DA] flex justify-between ${classStyle} ${
          open === true && "rounded-b-[0px]"
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
        className={` border-[#CED2DA] absolute w-full top-25 ${classStyle} ${
          open === false && "hidden"
        }`}
      >
        {options.map((item, index) => {
          return (
            <li
              key={`${index}-dropDown`}
              className="md:text-[16px] text-[12px] bg-[#ffffff] text-[#637083] hover:bg-[#e3ebf7] last:rounded-b-[50px] cursor-pointer py-4 px-8 "
              onClick={(e) => {
                setSelected(item.name), setOpen(!open);
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
