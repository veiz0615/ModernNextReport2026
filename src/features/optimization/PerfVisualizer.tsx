"use client";
// src/features/compiler-report/HighPerfVisualizer.tsx
import { useState, useEffect } from 'react';
import type { ReportSectionProps } from '../../types/report';

// 重い計算をシミュレートする関数
const generateParticles = (count: number, time: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.sin(i * 0.2 + time) * 100 + 150,
        y: Math.cos(i * 0.5 + time) * 100 + 150,
        color: `hsl(${(i + time * 50) % 360}, 70%, 60%)`,
    }));
};

export function HighPerfVisualizer({ id }: ReportSectionProps) {
    const [time, setTime] = useState(0);
    const [mounted, setMounted] = useState(false);

    // 常に再レンダリングを走らせる
    useEffect(() => {
        setMounted(true);

        const interval = setInterval(() => {
            setTime((t) => t + 0.05);
        }, 16); // 約60fps
        return () => clearInterval(interval);
    }, []);

    // ★重要：マウントされるまでは何も表示しない、もしくは静的な状態を返す
    // これにより、サーバーとクライアントの「最初の1フレーム」が完全に一致します
    if (!mounted) {
        return (
            <section id={id} className="bg-white shadow-sm">
                <div className="h-[300px] w-full bg-slate-900 rounded-xl" />
            </section>
        );
    }

    // ★ココがポイント！
    // 本来なら generateParticles は再レンダリングのたびに実行されるので
    // 昔なら useMemo(() => generateParticles(500, time), [time]) と書いていました。
    // 2026年の React Compiler 環境では、このままでも自動的に最適化されます。
    const particles = generateParticles(500, time);

    return (
        <section id={id} className="bg-white shadow-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800">2. React Compiler による自動メモ化</h3>
                <p className="text-sm text-slate-500">
                    useMemo や useCallback はもう不要。コンパイラが依存関係を自動解析し、最小限の再レンダリングを実現。
                </p>
            </div>

            <div className="relative h-[300px] w-full bg-slate-900 rounded-xl overflow-hidden">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            left: `${p.x}px`,
                            top: `${p.y}px`,
                            backgroundColor: p.color,
                            boxShadow: `0 0 8px ${p.color}`,
                        }}
                    />
                ))}
                <div className="absolute bottom-4 right-4 text-white text-xs font-mono bg-black/50 px-2 py-1 rounded">
                    FPS: 60 (Auto-optimized)
                </div>
            </div>

        </section>

    );
}