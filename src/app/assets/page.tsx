// src/app/assets/page.tsx
import { AssetDemo } from '@/features/assets/AssetDemo';
import Link from 'next/link';

export default function AssetsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <Link href="/" className="text-sm font-bold text-blue-600 hover:underline mb-8 inline-block">
        ← ポータルへ戻る
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Next-Gen Assets</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          アセットの最適化は、エンジニアの仕事ではなくフレームワークの仕事になりました。
          画像の軽量化、フォントのプリロード、スクリプトの実行タイミング制御を自動化し、最高のCore Web Vitalsを維持します。
        </p>
      </header>

      <AssetDemo />
    </div>
  );
}