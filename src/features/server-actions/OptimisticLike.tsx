// src/features/server-actions/OptimisticFeedback.tsx
"use client";

import { useOptimistic, useState, useTransition } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { incrementLikeAction } from './actions';

export function OptimisticLike() {
    const [likes, setLikes] = useState(1234);
    const [isPending, startTransition] = useTransition();

    // 楽観的UIの定義
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (current, _) => current + 1
    );

    const handleLike = async () => {
        // startTransitionで括ることで、Next.jsに「今から非同期な状態変化が起きるよ」と教える
        startTransition(async () => {
            // サーバーの返答を待たずに、見た目だけ先に＋1する
            addOptimisticLike(null);

            try {
                // サーバー側の関数（Server Action）を直接実行
                const updatedLikes = await incrementLikeAction(likes);
                setLikes(updatedLikes);
            } catch (e) {
                console.error("更新に失敗しました");
                // 失敗した場合は、自動的に optimisticLikes が元の likes に戻る！
            }
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-full" />
                    <div>
                        <p className="font-bold text-slate-900">Next.js Expert</p>
                        <p className="text-xs text-slate-400">2026年4月17日 · サーバー通信中</p>
                    </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Server Actionsを使えば、ローディングスピナーを見る時間はもう終わりです。
                    このボタンを押してみてください。ネットワークが遅くても、数値は「即座に」変わります。
                </p>

                <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                    <button
                        onClick={handleLike}
                        disabled={isPending}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all
                            ${isPending ? 'text-pink-500 bg-pink-50' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <Heart className={`w-5 h-5 ${isPending || optimisticLikes > 1234 ? 'fill-pink-500 text-pink-500' : ''}`} />
                        <span className="font-bold">{optimisticLikes}</span>
                    </button>
                    
                    <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl">
                        <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}