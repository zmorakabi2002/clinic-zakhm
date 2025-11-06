export default function TextArea({
  lable,
  placeHolder,
  inputValue,
  inputChange,
  classStyle = "w-[337px] h-[60px]",
}) {
  return (
    <div>
      <p className=" pb-[8px] font-iransans font-medium md:text-[18px] text-[16px] leading-[24px] tracking-[1%] text-right text-[#344051] ">
        {lable}
      </p>
      <textarea
        type="text"
        value={inputValue}
        placeholder={placeHolder}
        onChange={inputChange}
        className={`pt-[18px] border-[1.5px] rounded-[34px] border-[#CED2DA] px-[20px] placeholder:text-[18px] placeholder:text-right placeholder:text-[#637083] ${classStyle}`}
      />
    </div>
  );
}
