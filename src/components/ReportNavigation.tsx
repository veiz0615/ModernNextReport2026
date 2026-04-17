"use client";
// src/components/ReportNavigation.tsx
import React from 'react';

export function ReportNavigation() {
  const navItems = [
    { label: 'Async API', href: '#async' }, // idは型定義や実装と合わせる
    { label: 'Compiler', href: '#compiler' },
    { label: 'Actions', href: '#like' },    // idを実装に合わせて修正
    { label: 'Visual', href: '#visual' },
  ];

  // タイトルクリックで一番上へスムーズに戻る
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // URLのハッシュを消してスッキリさせる（任意）
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴ・タイトル部分 */}
        <a
          href="#"
          onClick={scrollToTop}
          className="font-bold text-slate-800 tracking-tighter hover:text-blue-600 transition-colors cursor-pointer"
        >
          MODERN-NEXT-REPORT
        </a>

        {/* ナビゲーションメニュー */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}