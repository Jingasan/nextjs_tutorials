/**
 * app/layout.tsx
 * Route Layoutファイル
 *
 * Layoutファイルは、アプリケーションの共通部分を定義するために使用される。
 * 例えば、ヘッダー／フッター／ナビゲーションメニューなど、複数のページで共有される要素を含むことが一般的である。
 * これにより、コードの重複を避け、アプリケーションのメンテナンスを容易にすることができる。
 *
 * appディレクトリの直下に配置したLayoutファイルはRoot Layoutとして識別される。
 * Root Layoutとは、<html>や<body>を含む最上位のLayoutのことである。
 * Root Layoutで指定したレイアウトはすべてのページに適用される。
 * page.tsxファイルと同様に、Reactコンポーネントをexport defaultする。
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
