import ServicesectionDesk from "./_components/ServicesectionDesk";
// import ServicesectionMobile from "./_components/ServicesectionMobile";

export default function Servicesection() {
  return (
    <>
      {/* دسکتاپ */}
      <div className="hidden md:flex">
        <ServicesectionDesk />
      </div>

      {/* موبایل */}
      {/* <div className="flex md:hidden">
        <ServicesectionMobile />
      </div> */}
    </>
  );
}
