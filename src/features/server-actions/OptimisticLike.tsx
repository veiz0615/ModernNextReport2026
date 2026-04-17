"use client";
// src/features/interaction/OptimisticFeedback.tsx
import { useOptimistic, useState, useTransition } from 'react';
import { Heart } from 'lucide-react';
import type { ReportSectionProps } from '../../types/report';
import { incrementLikeAction } from '@/features/server-actions/actions';

export function OptimisticFeedback({ id }: ReportSectionProps) {
    const [likes, setLikes] = useState(100);
    const [isPending, startTransition] = useTransition();

    // ★ココがモダンReact 19！
    // 現在のステートを元に「一時的な（楽観的な）状態」を生成する
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (current, _) => current + 1
    );

    const handleLike = async () => {
        startTransition(async () => {
            // 1. まずUI上で「仮に」増やす（一瞬で反映！）
            addOptimisticLike(null);

            // 2. Server Action　を直接呼ぶ
            const updateLikes = await incrementLikeAction(likes);

            // 3. 実際のステートを更新
            setLikes(updateLikes);
        });
    };

    return (
        <section id={id} className="bg-pink-50 border-pink-100">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-900">3. Actions & Optimistic UI</h3>
                <p className="text-sm text-pink-700">
                    サーバーのレスポンスを待たず、ユーザーの操作に即座に反応する「期待感」の設計。
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white p-10 rounded-2xl shadow-sm">
                <button
                    onClick={handleLike}
                    disabled={isPending}
                    className={`
            group flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
            ${isPending ? 'bg-pink-100 text-pink-400' : 'bg-pink-500 text-white hover:bg-pink-600 active:scale-95'}
          `}
                >
                    <Heart className={`w-5 h-5 ${isPending ? 'fill-pink-400' : 'group-hover:fill-white'}`} />
                    {optimisticLikes} Likes
                </button>

                {isPending && (
                    <p className="text-xs text-pink-400 animate-pulse">サーバーと同期中...</p>
                )}
            </div>
        </section>

    );
}