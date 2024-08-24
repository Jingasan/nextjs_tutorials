/**
 * サインインページ
 */
import { signIn } from "@/auth/config";

export default async function Page() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button>サインイン</button>
      </form>
    </div>
  );
}
