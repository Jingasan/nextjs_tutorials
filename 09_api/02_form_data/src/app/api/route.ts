/**
 * Form Data
 *
 * <form method="POST">で送信されるフォームデータを参照するためには、
 * formData()をawaitしてget()する。
 *
 * [動作確認]
 * curl -X POST http://localhost:3000/api -d 'name=Yamada&email=yamada@example.com'
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}
