/**
 * フォントの最適化
 *
 * カスタムフォントを使用すると、フォントのファイルを取得して読み込む必要がある場合、
 * パフォーマンスに影響を与える可能性がある。
 * next/fontモジュールを使用すると、アプリケーション内のフォントを自動的に最適化してくれる。
 * next/fontモジュールはプロジェクトのビルド時にフォントファイルをダウンロードする。
 * そして、フォントのファイルを他の静的なアセットと一緒にホストする。
 * これにより、ユーザーがアプリケーションにアクセスするときに、
 * パフォーマンスに影響するフォントのためのネットワークリクエストがなくなる。
 */
import { Inter } from 'next/font/google'; // フォントのインポート
export const inter = Inter({ subsets: ['latin'] }); // サブセット（フォントの一部）のロード

export default function Page() {
  return (
    <>
      <h1>Google Inter Font Test</h1>
      <h1 className={inter.className}>Google Inter Font Test</h1>
    </>
  );
}
