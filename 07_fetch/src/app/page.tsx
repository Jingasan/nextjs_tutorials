/**
 * fetch関数
 * Next.jsのfetch関数は、パフォーマンス向上のため、Next.js内部で拡張されている。
 * 拡張１：静的データのキャッシュ
 *   Next.jsのfetch関数では、何も指定しなければ、静的データの取得と扱われて結果をキャッシュする。
 *   データ取得結果のキャッシュを作成することで、データソースへのアクセスを減らし、レスポンスを高速化する。
 *   頻繁に更新される動的データを取得する場合は、fetch関数の第二引数に{cache:"no-store"}を指定する。
 */
export default async function Page() {
  const res = await (
    await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'no-cache' })
  ).json();
  console.log(res);
  return (
    <>
      <h1>Fetch Test</h1>
      <div>{JSON.stringify(res)}</div>
    </>
  );
}
