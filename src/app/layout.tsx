import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "澄光汽车洗护中心",
  description: "专业洗车、汽车精护、内饰深清、漆面养护与预约到店服务。",
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
