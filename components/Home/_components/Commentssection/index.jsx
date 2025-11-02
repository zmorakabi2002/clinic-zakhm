import ButtonRes from "@/components/common/button";
import CommentCard from "@/components/common/commentCard";

const stars = [
  {
    id: 1,
    user: "Mohammad",
    url: "/images/userimg.jpg",
    explainText: "lskdnflsdnflbednflsebf",
    stars: 3,
  },
  {
    id: 2,
    user: "ali",
    url: "/images/userimg.jpg",
    explainText: "lskdnflsddkcmnflbednflsebf",
    stars: 1,
  },
  {
    id: 3,
    user: "zahra",
    url: "/images/userimg.jpg",
    explainText: "weirj",
    stars: 3,
  },
];

export default function Commentssection() {
  return (
    <div className="h-[498px] mt-[68px] mx-[65px] relative flex flex-col">
      <div className="flex items-center  relative h-[100%] mt-[77px] gap-20">
        <div className="flex flex-col gap-[32px] relative ">
          <p className="font-[samim] font-bold text-[32px] leading-[44px] text-[#141C24] ">
            در مورد کلینیک نیک چه میشنویم؟
          </p>
          <p className="font-[samim] font-bold text-[24px] leading-[44px] text-[#414E62] ">
            این ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد کلینیک
            نیک دارند.
          </p>
        </div>
        <div className="relative w-[450px] h-[323px]">
          {stars.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="absolute "
              style={{
                transformOrigin: "",
                transform: `translate(${i * -25}px, ${-i * 40}px) rotate(${
                  i * -5
                }deg)`,
                zIndex: 10 - i,
              }}
            >
              <CommentCard userData={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[32px] ">
        <ButtonRes lable={"ثبت و مشاهده نظرات"} />
      </div>
    </div>
  );
}
