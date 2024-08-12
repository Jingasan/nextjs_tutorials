/**
 * app/loading-test/page.tsx
 * ローディング
 *
 * ローディングは、時間のかかるコンポーネントを表示する際に非同期で呼び出しを行い、
 * 待っている間ローディングアイコン等を表示することができる。
 * 時間のかかるコンポーネントを<Suspense>～</Suspense>で囲み、fallbackにLoadingを指定する。
 * <Suspense>を使用することにより、時間のかかる処理が終わるまでページ全体のレンダリングが待たされることなく、
 * 個々の<Suspense>を個別に非同期に呼び出すことができる。
 * また、読み込み中はfallbackで指定したローディング部品を表示する。
 */
import { Suspense } from 'react'
import Loading from './loading'
import WaitComponent from './wait'

export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        <WaitComponent />
      </Suspense>
    </div>
  )
}
