import type { Metadata } from "next";

/**
 * Metadata
 *
 * Metadataでは、HTMLタイトルなどを設定することができる。
 * また、App Routerにおいて、faviconはicon.icoのファイル名でsrc/appフォルダ下に配置することで設定できる。
 */
export const metadata: Metadata = {
  title: "Next.js",
  description: "Next.js Practice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
