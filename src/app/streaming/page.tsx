// src/app/streaming/page.tsx
import { StreamingDemo } from '@/features/streaming/StreamingDemo';
import Link from 'next/link';

export default function StreamingPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <Link href="/" className="text-sm font-bold text-blue-600 hover:underline mb-8 inline-block">
        ← ポータルへ戻る
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Streaming & Suspense</h1>
        <p className="text-lg text-slate-600">
          すべてのデータが揃うのを待つ必要はありません。準備ができた部品から順次、サーバーからブラウザへ「流し込み（Streaming）」ます。
        </p>
      </header>

      <section className="space-y-8">
        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">リアルタイム・デモ</h2>
          <p className="text-blue-100 text-sm">リロードすると、各カードが異なるタイミングで出現するのが確認できます。</p>
        </div>
        
        <StreamingDemo />
      </section>
    </div>
  );
}