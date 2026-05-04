import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青台台球器材店",
  description: "专业台球器材、球房耗材、球杆维护与整桌安装服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
