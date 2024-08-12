/**
 * app/template-test/template.tsx
 * Templateファイル
 *
 * テンプレートは、レイアウトとほぼ同じ機能を持つ。
 * レイアウトは画面が遷移してもDOM要素やステートが維持されるのに対し、
 * テンプレートは繊維の度に新しいDOM要素が作成され、ステートがリセットされる。
 * 画面遷移時にレイアウトに埋め込んだフォームを初期化したい場合や、アニメーションを表示したい場合などに、
 * レイアウトの代わりにテンプレートが使用される。
 * page.tsxファイルと同様に、Reactコンポーネントをexport defaultする。
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
