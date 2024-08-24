/**
 * Middlewareによって、ログインしていないと見れないページ
 */
import { auth, signOut } from "@/auth/config";

export default async function Page() {
  // セッション情報を取得
  const session = await auth();

  return (
    <div>
      <p>EMAIL: {session?.user?.email}</p>
      <p>NAME: {session?.user?.name}</p>
      <p>Session Expired: {session?.expires}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>サインアウト</button>
      </form>
    </div>
  );
}
