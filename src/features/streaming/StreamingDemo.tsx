// src/features/streaming/StreamingDemo.tsx
import { Suspense } from 'react';

// 重いデータ取得をシミュレートする関数
async function SlowComponent({ delay, title }: { delay: number; title: string }) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500">
        このデータは {delay}ms 待機した後にサーバーからストリーミングされました。
      </p>
    </div>
  );
}

// スケルトン（読み込み中の見た目）
function Skeleton() {
  return (
    <div className="p-6 bg-slate-100 animate-pulse rounded-2xl border border-transparent">
      <div className="h-4 w-1/2 bg-slate-200 rounded mb-4" />
      <div className="h-3 w-full bg-slate-200 rounded" />
    </div>
  );
}

export function StreamingDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* それぞれ別のタイミングで表示される */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent delay={1000} title="ユーザープロフィール" />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <SlowComponent delay={3000} title="最新の活動ログ" />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <SlowComponent delay={1500} title="おすすめの記事" />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <SlowComponent delay={4500} title="解析レポート（最重量）" />
      </Suspense>
    </div>
  );
}