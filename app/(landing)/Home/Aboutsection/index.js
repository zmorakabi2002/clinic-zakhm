import AboutDesk from "./_components/AboutDesk";
import AboutMobile from "./_components/AboutMobile";

export default function Aboutsection() {
  return (
    <>
      {/* نسخه دسکتاپ */}
      <div className="hidden md:flex">
        <AboutDesk />
      </div>

      {/* نسخه موبایل */}
      {/* <div className="flex md:hidden">
        <AboutMobile />
      </div> */}
    </>
  );
}
