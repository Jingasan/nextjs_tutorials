"use client";

/**
 * サインインページ
 */
import React from "react";
//import { signIn } from "next-auth/react";
import { signIn } from "@/authAction";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     try {
  //       const res = await signIn("credentials", {
  //         email,
  //         password,
  //       });
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div>
      <form action={() => signIn()}>
        <button>サインイン</button>
      </form>
      {/* <div>
        <button onClick={() => signIn()}>サインイン</button>
      </div> */}
      {/* <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">ログイン</button>
        </form>
      </div> */}
    </div>
  );
}
