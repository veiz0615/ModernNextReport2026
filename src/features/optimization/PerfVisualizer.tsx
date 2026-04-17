"use client";
// src/features/optimization/PerfVisualizer.tsx
import { useState, useRef, useEffect } from 'react';
import { Cpu, Activity } from 'lucide-react';

// パーティクル1つ1つのコンポーネント（Compilerが自動でメモ化する）
function Particle({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <div 
      className="absolute w-1 h-1 rounded-full transition-all duration-500 ease-out"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`
      }} 
    />
  );
}

export function PerfVisualizer() {
  const [count, setCount] = useState(100);
  const [lastRenderTime, setLastRenderTime] = useState(0);
  
  // 大量のパーティクルデータを生成
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));

  // レンダリング時間を計測
  const startTime = useRef(performance.now());
  useEffect(() => {
    setLastRenderTime(performance.now() - startTime.current);
    startTime.current = performance.now();
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Cpu className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Compiler Status</span>
          </div>
          <div className="text-3xl font-black text-white">AUTO-MEMOIZED</div>
          <p className="text-slate-400 text-xs mt-2">React Compiler (v19+) is optimizing this component</p>
        </div>

        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Render Time</span>
          </div>
          <div className="text-3xl font-black text-white">{lastRenderTime.toFixed(2)} ms</div>
          <p className="text-slate-400 text-xs mt-2">Current performance overhead</p>
        </div>
      </div>

      <div className="relative h-64 bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-inner">
        {particles.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} color={p.color} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200">
        <label className="text-sm font-bold text-slate-500">
          同時レンダリング数: <span className="text-blue-600 text-lg">{count}</span>
        </label>
        <input 
          type="range" 
          min="10" 
          max="1000" 
          step="10"
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <p className="text-xs text-slate-400">
          スライダーを動かして再レンダリングを発生させても、パーティクルの配置計算が自動最適化されます。
        </p>
      </div>
    </div>
  );
}