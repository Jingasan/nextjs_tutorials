/**
 * ダイナミックルーティング　階層化
 * app/blog2/[...slugs]/page.tsx
 *
 * http://<hostname>/blog2/{slug1}/{slug2}のように階層的なURLパラメータを受け取るためには、
 * app/blog2/[...slugs]という[]で囲まれて名前の先頭に...が付くフォルダを作成する。
 * page.tsx内でURLパラメータを取得することができる。
 */
export default function Page({ params }: { params: { slugs: string[] } }) {
  return <h1>Blog: {params.slugs.join(', ')}</h1>;
}
