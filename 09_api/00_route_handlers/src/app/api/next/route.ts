/**
 * Route Handlers
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 *
 * Route Handlersとは、Next.jsでAPIを提供する機能である。
 * Javascript標準のRequest/Responseを使用するAPIの他に、
 * Next.jsで拡張したNextRequest/NextResponseを使用するAPIがある。
 *
 * 尚、Route Handlersはデフォルトではキャッシュを行わない。
 */
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

/**
 * GETメソッド
 * @param req
 * @returns
 */
export function GET(req: NextRequest): NextResponse {
  // Queryパラメータを取得
  const params = req.nextUrl.searchParams;
  const query = params.get("id");
  // リクエストヘッダーを取得
  const headersList = headers();
  const referer = headersList.get("referer");
  return NextResponse.json({ query: query, headers: { referer: referer } }, { status: 200 });
}

/**
 * POSTメソッド
 * @param req
 * @returns
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  // BODYパラメータを取得
  const params = await req.json();
  return NextResponse.json({ body: params }, { status: 200 });
}

/**
 * PUTメソッド
 * @param req
 * @returns
 */
export async function PUT(req: NextRequest): Promise<NextResponse> {
  // BODYパラメータを取得
  const params = await req.json();
  return NextResponse.json({ body: params }, { status: 200 });
}

/**
 * DELETEメソッド
 * @param req
 * @returns
 */
export function DELETE(req: NextRequest): NextResponse {
  // Queryパラメータを取得
  const params = req.nextUrl.searchParams;
  const query = params.get("id");
  // リクエストヘッダーを取得
  const requestHeaders = new Headers(req.headers);
  return NextResponse.json({ query: query, headers: requestHeaders }, { status: 200 });
}
