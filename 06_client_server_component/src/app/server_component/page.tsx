/**
 * Server Component：サーバーサイドでのみ実行されるコンポーネント
 *
 * Server Componentは、非同期関数(async function)で書くことができるため、
 * コンポーネント上から直接外部Web APIのデータを取得してレンダリングすることができる。
 * (ReactのようにuseEffectの中でのWeb API呼び出しは不要)
 *
 * Next.jsでは、App Router内で実装されるReactコンポーネントは、何も宣言しなければ、
 * デフォルトですべてのコンポーネントがServer Componentとして扱われる。
 * Server Componentは完全にサーバーサイドでのみ実行されるため、
 * コンポーネントのJSファイルがブラウザに送信されることがない。
 * これにより、Next.jsは高パフォーマンスのWebアプリケーションを実現する。
 */
export default async function ServerComponent() {
  /**
   * Next.jsのfetch関数は、少ない設定で適切なデータ取得ができるようにNext.js内部で拡張されている。
   */
  const res = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
  console.log(res);
  return <div>{JSON.stringify(res)}</div>;
}
