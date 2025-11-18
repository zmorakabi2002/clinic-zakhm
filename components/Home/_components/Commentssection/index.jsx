"use client";
import ButtonRes from "@/components/common/button";
import CommentCard from "@/components/common/commentCard";
import { useRouter } from "next/navigation";

const stars = [
  {
    id: 1,
    user: "محمد رضایی",
    url: "/images/userimg.jpg",
    explainText:
      "تجربیات من در نیک کلینیک بسیار عالی و رضایت‌بخش است. ایشان از برخورد فوق‌حرفه‌ای برخوردارند و کادر ایشان نیز به بهبود مراجعه‌کننده اهمیت می‌دهند.",
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
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/clientSatisfaction");
  };
  return (
    <div className="lg:mt-17 mt-12.5 lg:mx-16 mx-[1.93rem] flex flex-col">
      <div className="lg:h-[418px] h-[505px] lg:flex lg:flex-row lg:gap-0 flex flex-col gap-[26px] lg:items-end items-center justify-between">
        <div className="lg:w-[36.187rem] w-[22.3rem] lg:h-[312px] h-[120px] flex flex-col justify-center gap-8">
          <p className="font-[samim] font-bold lg:text-[2rem] text-[1.5rem] lg:leading-11 leading-10 text-[#141C24] ">
            در مورد کلینیک نیک چه میشنویم؟
          </p>
          <p className="font-[samim] font-bold lg:text-[1.5rem] text-[1rem] lg:leading-11 leading-6 text-[#414E62] ">
            این ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد کلینیک
            نیک دارند.
          </p>
        </div>

        <div className="lg:w-[485px] lg:h-[418px] w-[22.3rem] h-full flex items-end ">
          {stars.slice(0, 3).map((item, index) => {
            return (
              <div
                key={`${index}-stars`}
                className=" absolute"
                style={{
                  transformOrigin: "",
                  transform: `translate(${index * -20}px, ${
                    -index * 32
                  }px) rotate(${index * -5}deg)`,
                  zIndex: 10 - index,
                }}
              >
                <CommentCard userData={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:flex hidden justify-center mt-8 ">
        <ButtonRes lable={"ثبت و مشاهده نظرات"} onClickButton={handleClick} />
      </div>
    </div>
  );
}
