import "./globals.css";

export const metadata = {
  title: "Clinic Website",
  description: "Modern clinic landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative">{children}</body>
    </html>
  );
}
``;
