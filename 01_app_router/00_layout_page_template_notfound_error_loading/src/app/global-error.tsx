/**
 * app/global-error.tsx
 * グローバルエラー
 *
 * error.tsxでは、page.tsxで発生したエラーを捕捉することはできるが、
 * layout.tsxやtemplate.tsxで発生したエラーを捕捉することはできない。
 * これらを捕捉するには、global-error.tsxを作成する。
 */
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
        <div>{error.message}</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
