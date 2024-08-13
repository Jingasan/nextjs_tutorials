/**
 * Module aliases
 *
 * tsconfig.jsonのpathsにパスのエイリアスを設定することで、エイリアスでimportできるようになる。
 */
import Button from '@alias1/button';

export default function Page() {
  return (
    <>
      <h1>Module Alias Test</h1>
      <Button />
    </>
  );
}
