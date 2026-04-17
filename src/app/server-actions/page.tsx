// src/app/server-actions/page.tsx
import { OptimisticLike } from '@/features/server-actions/OptimisticLike';
import Link from 'next/link';

export default function ServerActionsPage() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            
            <header className="mb-12">
                <h1 className="text-4xl font-black text-slate-900 mb-4">Server Actions & Optimistic UI</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    APIルートを介さず、クライアントからサーバー関数を直接実行します。
                    さらに、サーバーの応答を待たずにUIを先行して更新する「楽観的更新」により、ゼロ・レイテンシな操作感を実現します。
                </p>
            </header>

            <section className="bg-slate-900 p-12 rounded-[3rem] text-center">
                <h2 className="text-white text-2xl font-bold mb-8">SNSライクな更新デモ</h2>
                <OptimisticLike />
                <p className="mt-8 text-slate-400 text-xs">
                    ※サーバー側で意図的に1秒の遅延を入れていますが、ボタンの数値は即座に反応します。
                </p>
            </section>
        </div>
    );
}