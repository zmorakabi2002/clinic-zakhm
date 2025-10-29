import Herosectiondesk from "./_components/HerosectionDesk";
// import HerosectionMobile from "./_components/HerosectionMobile";

export default function Herosection() {
  return (
    <>
      {/* نسخه دسکتاپ */}
      <div className="md:flex">
        <Herosectiondesk />
      </div>

      {/* نسخه موبایل */}
      {/* <div className="flex md:hidden">
        <HerosectionMobile />
      </div> */}
    </>
  );
}
