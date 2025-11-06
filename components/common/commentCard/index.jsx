import Image from "next/image";

export default function CommentCard({ userData }) {
  return (
    <div className=" lg:w-[25.375rem] w-[18.625rem] lg:h-[20.187rem] h-[17.187rem] flex flex-col gap-[22px] py-[38px] rounded-[25px] border-[#CED2DA] border-[1px] bg-[#F2F4FF] shadow-[1px_4px_9.7px_0px_#00000025]">
      <div className="w-[286px] flex flex-row gap-[30px] items-center mr-[32px]  ">
        <Image
          src={userData?.url}
          alt="test"
          width={100}
          height={100}
          className="rounded-[100%] lg:w-22 lg:h-22 w-12 h-12"
        />

        <p className="font-[Samim] font-bold lg:text-[1.5rem] text-[1.25rem] lg:leading-[2.75rem] leading-[2.25rem] ">
          {userData?.user}
        </p>
      </div>
      <p className="font-[Samim] font-normal lg:text-[0.875rem] text-[0.75rem] text-[#141C24] mx-[32px] leading-[1.5rem]  ">
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
