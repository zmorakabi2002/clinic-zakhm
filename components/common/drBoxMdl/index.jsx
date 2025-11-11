import Image from "next/image";

const specializedArea = [
  { id: 1, name: "زخم دیابتی" },
  { id: 2, name: "زخم بستر" },
  { id: 3, name: "زخم های مزمن" },
  { id: 4, name: "ترمیم بافت" },
];

export default function DrBox({ doctorCardData, onPageClick }) {
  return (
    <div
      className="fixed bg-[#ff0000ce] z-20 w-full h-screen top-0 right-0 flex justify-center items-center"
      onClick={onPageClick}
    >
      <div className="bg-white border rounded-[20px] p-5 flex flex-col justify-center items-centers w-[300px]">
        <div>
          <p> {doctorCardData?.name} </p>
          <Image
            src={"images/facebook.svg"}
            alt="doctorImage"
            width={120}
            height={120}
            className="rounded-[100%] border-[2px] border-[#086391] md:flex hidden "
          />
          <p className="font-[samim] font-normal md:text-[14px] text-[12px] text-[#F9FAFB] md:px-[12px] px-[10px] md:py-[8px] py-[4px] bg-[#086391] rounded-[36px] ">
            {" "}
            {doctorCardData?.Expertise}{" "}
          </p>
        </div>

        <div>
          <p>مدرک تحصیلی</p>
          <div>
            <p> {doctorCardData?.degree} </p>
            <p> {doctorCardData?.university} </p>
          </div>
        </div>
        <div>
          <p> سابقه کاری</p>
          <p> {doctorCardData?.workHistory} </p>
        </div>
        <div>
          <p>حوزه های تخصصی</p>
          {specializedArea.map((item, index) => {
            return (
              <div key={`${index}-specializedArea`}>
                <p className="font-medium text-[14px] text-[#202B37] bg-[#F9FAFB] border-[2px] border-[#086391] rounded-[36px] px-[18px] py-[8px] ">
                  {" "}
                  {item?.name}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
