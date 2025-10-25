import "./globals.css";
import Header from "./(landing)/Home/Header";
import Herosection from "./(landing)/Home/Herosection";
import Aboutsection from "./(landing)/Home/Aboutsection";

export const metadata = {
  title: "Clinic Website",
  description: "Modern clinic landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative font-sans h-[745px] bg-[#075379]">
        <Header />
        <Herosection />
        <Aboutsection />
        {children}
      </body>
    </html>
  );
}
``;
