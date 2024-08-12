/**
 * app/(...)の名前を持つフォルダはルートグループを形成する。
 * 例えば、以下のフォルダ構成では、member1～member2は１つのグループgroup1に含まれるが、
 * http://<hostname>/member1, http:/<hostname>/～/member2としてアクセスできる。
 * グループはレイアウトやテンプレートを共有することができる。
 * app/
 *   (group1)/
 *     layout.tsx
 *     member1/page.tsx
 *     member2/page.tsx
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>(group1)</h1>
      <div>{children}</div>
    </>
  );
}
