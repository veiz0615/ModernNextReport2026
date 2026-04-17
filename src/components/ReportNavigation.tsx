// src/components/ReportNavigation.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function ReportNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 1. スクロールロック (モバイル・タブレットメニュー開閉時)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { label: 'Portal', href: '/' },
    { label: 'Streaming', href: '/streaming' },
    { label: 'Actions', href: '/server-actions' },
    { label: 'Optimization', href: '/optimization' },
    { label: 'Assets', href: '/assets' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-[110]">
        <div className="w-full max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* ロゴ */}
          <Link 
            href="/" 
            className="font-black text-slate-900 z-[120]" 
            onClick={() => setIsOpen(false)}
          >
            NEXT-2026
          </Link>

          {/* --- 【PC用】デスクトップナビ (lg以上で表示) --- */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  pathname === item.href 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* --- 【スマホ・タブレット用】ハンバーガーボタン (lg以上で隠す) --- */}
          <button
            className="lg:hidden p-3 z-[120] text-slate-900 bg-slate-50 rounded-full focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー開閉"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* --- 【スマホ・タブレット用】全画面オーバーレイ (lg以上で強制非表示) --- */}
      <div
        className={`fixed inset-0 bg-slate-900/95 z-[100] flex items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className="flex flex-col items-center gap-8 p-10"
          onClick={(e) => e.stopPropagation()} 
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black transition-all transform duration-300 ${
                pathname === item.href ? 'text-blue-500' : 'text-white'
              } ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 text-slate-500 text-xs font-bold tracking-widest">— TAP ANYWHERE TO CLOSE —</div>
        </nav>
      </div>
    </>
  );
}