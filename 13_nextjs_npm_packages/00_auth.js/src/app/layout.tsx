import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/* <SessionProvider> */}
      <body>{children}</body>
      {/* </SessionProvider> */}
    </html>
  );
}
