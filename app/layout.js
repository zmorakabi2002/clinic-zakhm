import Header from "@/components/Home/_components/Header";
import "./globals.css";
import Footer from "@/components/Home/_components/Footer";

export const metadata = {
  title: "Clinic Website",
  description: "Modern clinic landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
``;
