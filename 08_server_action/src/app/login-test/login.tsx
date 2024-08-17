/**
 * Server Action
 *
 * Server Actionとは、クライアントサイドのフォーム送信やボタンクリックなどのイベントから、
 * サーバーサイドで実行する関数を呼び出す機能である。
 * 「'use server'」を指定したサーバーサイドアクションをクライアント側のフォームから簡単に呼び出すことができる。
 * 以下の例では、クライアントのフォームに入力したメッセージがサーバーに送信され、サーバーのコンソールに出力される。
 * Next.jsの公式サイトでは、Zero client Javascriptと謳われており、
 * Server Actionを利用することで、fetch関数などを利用したクライアント用のコードを記述することなく、
 * サーバーサイドでのデータ更新（作成・更新・削除）を行うことができるようになる。
 */
"use server";
export async function loginAction(state: { message: string }, formData: FormData) {
  const user_id = formData.get("user_id");
  const password = formData.get("password");
  console.log({ user_id, password });
  return {
    message: "OK",
  };
}
