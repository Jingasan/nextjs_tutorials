/**
 * useRouter
 *
 * useRouterを用いると、ユーザクリック時ではなく、
 * プログラム中から任意のタイミングでリンク先にジャンプさせることができる。
 */
'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>useRouter Test</h1>
      <button onClick={() => router.push('/page-test')}>To page-test page</button>
    </div>
  );
}
