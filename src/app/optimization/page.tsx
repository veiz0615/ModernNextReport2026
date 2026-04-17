// src/app/optimization/page.tsx
import { PerfVisualizer } from '@/features/optimization/PerfVisualizer';
import Link from 'next/link';

export default function OptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <Link href="/" className="text-sm font-bold text-blue-600 hover:underline mb-8 inline-block">
        ← ポータルへ戻る
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">React Compiler & Optimization</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          2026年のReact開発において、手動のメモ化（useMemo/useCallback）はもはや過去の遺物です。
          コンパイラがコードを解析し、依存関係を自動的に処理することで、開発者はパフォーマンスを気にせず直感的にコードを書くことができます。
        </p>
      </header>

      <section>
        <PerfVisualizer />
      </section>

      <div className="mt-16 p-8 bg-amber-50 rounded-3xl border border-amber-100">
        <h3 className="text-amber-900 font-bold mb-2">💡 開発者の変化</h3>
        <p className="text-amber-800 text-sm leading-relaxed">
          以前は「このコンポーネントをmemo化すべきか？」を悩む必要がありましたが、今は違います。
          React Compilerは、「純粋関数」であることを前提に、変化が必要なパーツだけを特定して更新します。
        </p>
      </div>
    </div>
  );
}