import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import z from "zod";

// ユーザー情報（実運用ではDBに保存）
const users = [
  {
    id: "userId",
    name: "user",
    email: "user@email.com",
    password: "password", // 実運用では、salt(任意の文字列)を足してハッシュ化した値を保存
  },
];
// バリデーション
const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({ clientId: "GITHUB_ID", clientSecret: "GITHUB_SECRET" }),
    Google({ clientId: "GOOGLE_ID", clientSecret: "GOOGLE_SECRET" }),
    Credentials({
      credentials: {
        email: { label: "Email", name: "email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", name: "password", type: "password" },
      },
      // 認証ロジック
      authorize: async (credentials) => {
        // credentials: { csrfToken: string, email: string, password: string }
        try {
          // バリデーションチェック
          const { email, password } = await signInSchema.parseAsync(credentials);
          // ユーザー情報の検索
          const user = users.find((user) => user.email === email && user.password === password);
          // ユーザー情報の返却
          return user ? { id: user.id, name: user.name, email: user.email } : null;
        } catch (error) {
          throw new Error("Validation");
          return null;
        }
      },
    }),
  ],
  // セッション関連の設定
  session: {
    strategy: "jwt", // ストラテジー（デフォルトはjwt）
    maxAge: 60, // セッションの有効期限[sec]
  },
  // シークレット
  // トークンのハッシュ化, Cookieの署名／暗号化, 秘密鍵の生成などに利用される。
  // NEXTAUTH_SECRETを指定している場合は必須ではない。
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // ログイン後のリダイレクト先ページの設定
    redirect: async ({ url, baseUrl }) => {
      return baseUrl + "/user";
    },
  },
});
