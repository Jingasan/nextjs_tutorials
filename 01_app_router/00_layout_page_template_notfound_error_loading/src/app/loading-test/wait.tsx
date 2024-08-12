/**
 * 表示に時間のかかるコンポーネント
 */
function wait() {
  return new Promise((callback) => {
    setTimeout(callback, 3000)
  })
}
export default async function WaitComponent() {
  await wait()
  return <div>Finished!</div>
}
