/**
 * CORS
 *
 * 画面とAPIサーバーが異なるオリジンの場合、CORSを設定する必要がある。
 * CORSを有効化するには、レスポンスヘッダーでAccess-Control-Allow-*を返却する。
 *
 * [動作確認]
 * curl -i http://localhost:3000/api
 */
export async function GET(_req: Request) {
  return Response.json(
    { result: "OK" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://www.example.com/",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
}
