// src/features/assets/AssetDemo.tsx
"use client";

import Image from 'next/image';
import { ImageIcon, Type, Zap } from 'lucide-react';

export function AssetDemo() {
  return (
    <div className="space-y-12">
      {/* 1. Image Optimization Section */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Next-Gen Image</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-slate-50 shadow-inner">
            {/* AIが生成した高精細な画像をイメージ */}
            <Image 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
              alt="Abstract Art"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-bold text-slate-700 mb-1">自動WebP/AVIF変換</p>
              <p className="text-xs text-slate-500">ブラウザに合わせて最適な形式をサーバーが自動選択。</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-bold text-slate-700 mb-1">Lazy Loading</p>
              <p className="text-xs text-slate-500">スクロールして画面に入るまで読み込みを待機し、LCPを向上。</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-bold text-slate-700 mb-1">CLS防止</p>
              <p className="text-xs text-slate-500">画像が読み込まれる前から領域を確保し、画面のガタつきを防止。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Font Optimization Section */}
      <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <Type className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Variable Fonts</h2>
        </div>
        
        <p className="text-slate-400 mb-8 leading-relaxed">
          `next/font` は Google Fonts をビルド時に自動ダウンロードし、
          セルフホストします。これにより、外部へのリクエストが発生せず、
          フォントの適用も「一瞬」で終わります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['font-sans', 'font-mono', 'italic'].map((style) => (
            <div key={style} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
              <span className={`text-2xl font-black ${style === 'font-mono' ? 'font-mono' : ''}`}>
                Geist {style}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}