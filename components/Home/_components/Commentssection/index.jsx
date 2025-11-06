import ButtonRes from "@/components/common/button";
import CommentCard from "@/components/common/commentCard";

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
  return (
    <div className="lg:mt-[4.25rem] mt-[3.125rem] lg:mx-[4rem] mx-[1.93rem] flex flex-col ">
      <div className="lg:h-[418px] h-[505px] lg:flex lg:flex-row lg:gap-[5.31rem] flex flex-col gap-[26px] lg:items-end items-center">
        <div className="lg:w-[36.187rem] w-[22.3rem] lg:h-[312px] h-[120px] flex flex-col justify-center gap-[2rem]">
          <p className="font-[samim] font-bold lg:text-[2rem] text-[1.5rem] lg:leading-[2.75rem] leading-[2.5rem] text-[#141C24] ">
            در مورد کلینیک نیک چه میشنویم؟
          </p>
          <p className="font-[samim] font-bold lg:text-[1.5rem] text-[1rem] lg:leading-[2.75rem] leading-[1.5rem] text-[#414E62] ">
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

      <div className="lg:flex hidden justify-center mt-[32px] ">
        <ButtonRes lable={"ثبت و مشاهده نظرات"} />
      </div>
    </div>
  );
}
