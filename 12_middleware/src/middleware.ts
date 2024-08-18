/**
 * Middleware
 *
 * middleware.tsには、Next.jsがpage.tsxを呼び出す前に行う共通処理を記述することができる。
 * Middlewareは、以下の用途で利用する。
 * ・認証処理（※厳しいセキュリティが必要な場合はミドルウェアでの認証は避け、サーバーサイドで行うべき）
 * ・リダイレクト
 * ・ログ
 * ・セキュリティ（不正アクセス防止，承認されたアクセス元のみ許可）
 * など
 *
 * 尚、Next.jsの規約でmiddleware.tsは１つだけ置くことができる。
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.url);
  if (request.nextUrl.pathname.startsWith("/middleware-test1")) {
    // リダイレクト：別のパスにリダイレクトする。
    return NextResponse.redirect(new URL("/", request.url));
  }
  // リライト：URL表示はそのままで実行内容のみを転送する。
  return NextResponse.rewrite(new URL("/", request.url));
}

/**
 * config.matcher
 *
 * Middlewareでは、matcherに記述したパスにマッチするパスへのリクエストに対して割り込み処理を行う。
 * 「:path*」は任意のパス名を示す。
 */
export const config = {
  matcher: ["/middleware-test1/:path*", "/(middleware-test2|middleware-test3)/:path*"],
};
