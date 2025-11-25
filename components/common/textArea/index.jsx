import { resize } from "framer-motion";

export default function TextArea({
  lable,
  placeHolder,
  inputValue,
  inputChange,
  classStyle = "w-[337px] h-[60px]",
}) {
  return (
    <div>
      <p className=" pb-2 font-iransans font-medium md:text-[18px] text-[16px] leading-6 tracking-[1%] text-right text-[#344051] ">
        {lable}
      </p>
      <textarea
        type="text"
        value={inputValue}
        placeholder={placeHolder}
        onChange={inputChange}
        className={`pt-[18px] border-[1.5px] rounded-[34px] border-[#CED2DA] px-5 md:placeholder:text-[18px] placeholder:text-[14px] placeholder:text-right placeholder:text-[#637083] resize-none ${classStyle}`}
      />
    </div>
  );
}
