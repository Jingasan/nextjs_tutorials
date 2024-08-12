/**
 * リンク
 *
 * リンクは<a>で張る方法と<Link>で張る方法がある。
 */
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Link Test</h1>
      <ul>
        <li>
          <a href='page-test'>Page Test</a>
        </li>
        <li>
          <Link href='page-test'>Page Test</Link>
        </li>
      </ul>
    </>
  );
}
