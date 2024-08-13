/**
 * Client ComponentとServer Componentの使い分け
 *
 * Server Componentを使うべきケース
 * ・データを取得する。
 * ・バックエンドリソースを取得する。
 * ・機密情報を扱う。例：外部APIの呼び出しにAPIキー(機密情報)を指定する必要がある場合
 *
 * Client Componentを使うべきケース
 * ・インタラクティブな機能を持つ。
 * ・コンポーネントに保持した状態を扱う。例：useState
 * ・ブラウザ専用のAPIを使用する。
 * ・ブラウザ専用のHooksを使用する。例：usePathname HookでURLのパスを取得する。
 * ・React Classコンポーネントを使用する。
 */
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Client Component & Server Component</h1>
      <ul>
        <li>
          <Link href='client_component'>Client Component Test</Link>
        </li>
        <li>
          <Link href='server_component'>Server Component Test</Link>
        </li>
      </ul>
    </>
  );
}
