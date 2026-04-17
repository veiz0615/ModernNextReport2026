// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReportNavigation } from "@/components/ReportNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js 2026 Deep Dive Report",
  description: "Next.jsの進化と実践をまとめた技術レポート",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}>
        {/* 全ページ共通のナビゲーション */}
        <ReportNavigation />
        
        {/* 各ページの中身がここに入る */}
        <div className="pt-16"> 
          {children}
        </div>

        {/* 必要なら共通のフッターもここに */}
      </body>
    </html>
  );
}