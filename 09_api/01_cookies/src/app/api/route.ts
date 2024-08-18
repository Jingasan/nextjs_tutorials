/**
 * Cookie
 *
 * Cookieを参照するには、cookies()からget()してvalueを参照する。
 * Cookieを設定するには、Response()の第二引数オブジェクトのheadersにSet-Cookieを指定する。
 *
 * [動作確認]
 * curl -i -H "Cookie: my_cookie=AAA" http://localhost:3000/api
 * set-cookie: my_cookie=AAA ← CookieがセットされていればOK
 */

import { cookies } from "next/headers";

export async function GET(_req: Request) {
  const myCookie = cookies().get("my_cookie");
  console.log(myCookie?.value);
  const myCookieValue = myCookie ? myCookie.value : "DUMMY_DATA";
  return new Response("OK", {
    status: 200,
    headers: { "Set-Cookie": `my_cookie=${myCookieValue}` },
  });
}
