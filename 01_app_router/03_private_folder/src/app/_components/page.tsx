/**
 * Private Folder
 *
 * Private Folderとは、アンダースコアを接頭辞にもつフォルダのことである。
 * アンダースコアを接頭辞にもつフォルダに入っているpage.tsxファイルはルーティング対象外となり、表示されない。
 */
export default async function Page() {
  return <div>Invisible Page</div>;
}
