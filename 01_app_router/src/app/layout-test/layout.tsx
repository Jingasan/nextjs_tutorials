/**
 * app/layout-test/layout.tsx
 * Layoutファイル
 *
 * Layoutファイルはアプリケーションの共通部分を定義するために使用される。
 * 例えば、ヘッダー／フッター／ナビゲーションメニューなど、複数のページで共有される要素を含むことが一般的である。
 * これにより、コードの重複を避け、アプリケーションのメンテナンスを容易にすることができる。
 * app/xxx/layout.tsxで指定したレイアウトは、xxx配下のすべてのページに適用される。
 * page.tsxファイルと同様に、Reactコンポーネントをexport defaultする。
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <hr />
      <div>{children}</div>
      <hr />
    </>
  );
}
