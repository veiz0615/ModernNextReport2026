"use client";
// src/components/BackToTop.tsx
import { useState, useEffect } from 'react';

export function BackToTop() {
    const [show, setShow] = useState(false);

    // 一定以上スクロールしたらボタンを表示する
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300 group z-50"
            aria-label="TOPへ戻る"
        >
            {/* 上向き矢印のアイコン */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
}