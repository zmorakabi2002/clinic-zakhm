import HeaderDesk from "./_components/HeaderDesk";
import HeaderMobile from "./_components/HeaderMobile";

export default function Header() {
  return (
    <>
      {/* نسخه دسکتاپ */}
      <div className="hidden md:flex">
        <HeaderDesk />
      </div>

      {/* نسخه موبایل */}
      <div className="flex md:hidden">
        <HeaderMobile />
      </div>
    </>
  );
}
