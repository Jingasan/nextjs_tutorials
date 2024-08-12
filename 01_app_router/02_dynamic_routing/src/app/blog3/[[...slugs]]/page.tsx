/**
 * ダイナミックルーティング　パラメータ無し対応
 * app/blog3/[[...slugs]]/page.tsx
 *
 * app/blog2/[...slugs]/page.tsxの場合は、
 * /blog2/123や/blog2/456にはアクセスできても/blog2にアクセスすると、404 Not Foundとなってしまう。
 * /blog2にアクセスできるようにするには、[[...slugs]]のように括弧を二重にする。
 * 以下では、/blog3にアクセスすると、(None)を表示する。
 */
export default function Page({ params }: { params: { slugs: string[] } }) {
  if (params.slugs) {
    return <h1>Blog: {params.slugs.join(', ')}</h1>;
  } else {
    return <h1>Blog: (None)</h1>;
  }
}
