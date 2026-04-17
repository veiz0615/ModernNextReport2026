// src/app/page.tsx
import Link from 'next/link';
import { Zap, Database, Cpu, Image as imageIcon, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const chapters = [
    {
      slug: 'streaming',
      title: 'Streaming & Suspense',
      desc: '非同期データを待たずに表示を開始する。ユーザーを1秒も待たせないUXの極意。',
      icon: Zap,
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      slug: 'server-actions',
      title: 'Server Actions',
      desc: 'APIエンドポイントはもう不要。フロントとバックが関数で繋がる新時代の通信。',
      icon: Database,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      slug: 'optimization',
      title: 'Compiler & Performance',
      desc: 'React Compilerによる自動最適化。私たちが「メモ化」を忘れるための技術。',
      icon: Cpu,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      slug: 'assets',
      title: 'Next-Gen Assets',
      desc: '画像、フォント、スクリプト。フレームワークが肩代わりする究極の最適化。',
      icon: imageIcon,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-radial-gradient from-white to-slate-50">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full tracking-widest uppercase mb-4">
            Next.js 16.2.4 Project
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Next.js 2026 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Implementation Report
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            React 19のポテンシャルを解放する。<br></br>モダンフロントエンドの最新標準を網羅した実装サンプル。
          </p>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chapters.map((ch) => (
            <Link 
              key={ch.slug} 
              href={`/${ch.slug}`}
              className="group relative p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${ch.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <ch.icon className={`w-7 h-7 ${ch.color}`} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {ch.title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                {ch.desc}
              </p>

              <div className="flex items-center text-sm font-bold text-blue-600">
                詳細レポートを見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}