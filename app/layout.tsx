import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أكاديمية يلا مصري",
  description: "تعلم اللهجة المصرية مع نوف",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
