"use server";
import { signIn as signInNextAuth } from "@/auth/config";
import { AuthError } from "next-auth";

export async function signIn() {
  try {
    await signInNextAuth();
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            isSuccess: false,
            error: {
              message: "メールアドレスまたはパスワードが間違っています。",
            },
          };
        default:
          return {
            isSuccess: false,
            error: {
              message: "ログインに失敗しました。",
            },
          };
      }
    }
  }
}
