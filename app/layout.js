import Header from "@/components/Home/_components/Header";
import "./globals.css";
import Footer from "@/components/Home/_components/Footer";
import { DataProvider } from "./context/dataContext";

export const metadata = {
  title: "Clinic Website",
  description: "Modern clinic landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative">
        <DataProvider>
          <Header />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
``;
