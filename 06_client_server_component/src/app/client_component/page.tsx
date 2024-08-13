/**
 * Client Component：ブラウザ／サーバー両方で実行されるコンポーネント
 *
 * Client Component の作り方は、Server Componentからimportされるコンポーネントに
 * ここから先はClient Component になりますという宣言（ディレクティブ）「"use client"」を追加するだけである。
 * "use client"境界をまたいだ先のコンポーネントコードは、
 * インタラクションに必要な処理が含まれているものとして、ブラウザ向けにバンドルされて送信される。
 *
 * また、Client ComponentにimportされたコンポーネントはClient Componentになる。
 */
"use client";
import { useState } from "react";
export default function Counter() {
  /** カウンター値 */
  const [count, setCount] = useState(0);
  /** ボタンクリック時にカウントを更新する関数 */
  const onclick = () => {
    setCount(count + 1);
    console.log(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onclick}>Click me</button>
    </div>
  );
}
