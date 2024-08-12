/**
 * ダイナミックルーティング　複数パラメータ
 * app/blog4/[category]/[slug]/page.tsx
 *
 * http://<hostname>/{category}/{slug}を受け取るためには、
 * app/blog4/[category]/[slug]という[]で囲まれた名前のフォルダを階層的に作成する。
 */
export default function Page({ params }: { params: { category: string; slug: string } }) {
  return (
    <h1>
      Blog: {params.category} / {params.slug}
    </h1>
  );
}
