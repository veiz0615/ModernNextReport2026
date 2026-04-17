// src/components/ReportNavigation.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ReportNavigation() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Streaming', href: '/streaming' },
    { label: 'Actions', href: '/server-actions' },
    { label: 'Optimization', href: '/optimization' },
    { label: 'Assets', href: '/assets' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 左側：ロゴ（ポータルに戻るか、トップへ戻る） */}
        <Link
          href="/"
          className="font-black text-slate-900 tracking-tighter hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">N</div>
          <span className="hidden sm:inline">MODERN-NEXT-REPORT</span>
        </Link>

        {/* 右側：ナビゲーションメニュー */}
        <ul className="flex items-center gap-1 sm:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}