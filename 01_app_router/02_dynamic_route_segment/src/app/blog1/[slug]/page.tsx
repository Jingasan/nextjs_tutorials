/**
 * ダイナミックルーティング
 * app/blog1/[slug]/page.tsx
 *
 * http://<hostname>/blog1/{slug}などのようにURLでブログIDなどのパラメータを受け取りたい場合がある。
 * このような場合、app/blog1/[slug]という[]で囲まれた名前のフォルダを作成する。
 * また、page.tsx内でURLパラメータ[slug]を取得することができる。
 * [slug]のような可変なセグメントを「Dynamic Segment」と呼ぶ。
 */
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Blog: {params.slug}</h1>;
}
