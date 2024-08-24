/**
 * サインインページ
 */
import { auth, signIn } from "@/auth/config";

export default async function Page() {
  return (
    <div>
      {/** ログインパターン１ */}
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button>サインイン</button>
      </form>
      {/** ログインパターン２ */}
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button>Googleでサインイン</button>
      </form>
      {/** ログインパターン３ */}
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button>GitHubでサインイン</button>
      </form>
      {/** ログインパターン４ */}
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        <div>
          Email:
          <input name="email" type="email" />
        </div>
        <div>
          Password:
          <input name="password" type="password" />
        </div>
        <button>メールアドレス・パスワードでサインイン</button>
      </form>
    </div>
  );
}
