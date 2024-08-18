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

/**
 * GET メソッド
 * @param _req
 * @returns
 */
export async function GET(_req: Request) {
  return Response.json({ message: "Hello World !" }, { status: 200 });
}

/**
 * POSTメソッド
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  const contents = await req.json();
  return Response.json(contents, { status: 200 });
}
