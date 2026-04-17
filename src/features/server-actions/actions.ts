// src/featuers/server-actions/actions.ts
"use server"; // これを書くだけで、このファイルはサーバー専用になる

// 擬似的なデータベース（本当はここでDBを叩く）
export async function incrementLikeAction(currentLikes: number) {
  console.log("サーバー側で実行中...");
  
  // 重い処理をシミュレート
  await new Promise((res) => setTimeout(res, 1000));

  // 本来はここでDBを更新する
  const newLikes = currentLikes + 1;
  
  console.log(`いいねを更新しました: ${newLikes}`);
  
  return newLikes;
}