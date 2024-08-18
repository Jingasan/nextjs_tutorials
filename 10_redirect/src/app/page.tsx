/**
 * リダイレクト
 *
 * リダイレクトするためには、redirect()を使用する。
 */
import { redirect } from "next/navigation";

export default function Page() {
  redirect("https://www.google.com/");
}
