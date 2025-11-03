import Image from "next/image";

export default function CommentCard({ userData }) {
  return (
    <div className=" w-[406px] h-[323px] contain-content flex flex-col gap-[22px] justify-center rounded-[25px] border-[#CED2DA] border-[1px] bg-[#F2F4FF] shadow-[1px_4px_9.7px_0px_#00000025]">
      <div className="w-[286px] flex flex-row gap-[30px] items-center mr-[32px]">
        <Image
          src={userData?.url}
          alt="test"
          width={100}
          height={100}
          quality="10%"
          className="rounded-[100%] w-16 h-16"
        />

        <p className="font-[Samim] font-bold text-[24px] leading-[44px]  ">
          {userData?.user}
        </p>
      </div>
      <p className="font-[Samim] font-normal text-[14px] text-[#141C24] mx-[32px] leading-[24px]">
        {userData?.explainText}
      </p>
      <div className="flex gap-[16px] mr-[32px]">
        {Array.from({ length: userData?.stars }).map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={"/images/star.svg"}
                alt="stars"
                width={24}
                height={24}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
