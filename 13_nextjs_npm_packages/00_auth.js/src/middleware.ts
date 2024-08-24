/**
 * 認証用ミドルウェア
 */
import { NextResponse } from "next/server";
import { auth } from "@/auth/config";

export const config = {
  // ミドルウェアの対象パス：api, _next/static, _next/image, favicon.ico以外のパスへのアクセスであれば適用。
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

/**
 * 認証チェック
 */
export default auth((req) => {
  // ユーザーが認証済みか判断し、認証済みでなければサインインページにリダイレクトする。
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== "/") {
    return NextResponse.redirect(new URL(`/`, req.url));
  }
});
