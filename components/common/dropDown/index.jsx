import Image from "next/image";
import { useState } from "react";

export default function DropDown({ defaultValue, labename }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const options = [
    { id: 1, name: "مهندسی کامپیوتر" },
    { id: 2, name: "مهندسی پزشکی" },
    { id: 3, name: "روانشناسی" },
  ];

  return (
    <div className="w-[375px] flex flex-col m-4 relative ">
      <p className="font-medium text-[18px] text-[#344051] mb-[8px]">
        {labename}
      </p>
      <button
        className={`px-[20px] py-[18px] rounded-[50px] border-[1px] border-[#CED2DA] flex justify-between ${
          open === true && "rounded-b-[0px]"
        }`}
        onClick={(e) => setOpen(!open)}
      >
        <p className="font-samim font-normal text-[18px] text-[#637083] ">
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
        className={`border-[1px] border-[#CED2DA] rounded-b-[50px] absolute w-full top-25 ${
          open === false && "hidden"
        }`}
      >
        {options.map((item, index) => {
          return (
            <li
              key={`${index}-dropDown`}
              className="text-[16px] text-[#637083] hover:bg-[#e3ebf7] hover:last:rounded-b-[50px] cursor-pointer py-4 px-8 "
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
