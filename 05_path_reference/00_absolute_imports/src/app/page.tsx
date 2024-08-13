/**
 * Absolute import
 *
 * tsconfig.jsonのbaseUrlに"."を指定することで、プロジェクトのルートから直接importできる。
 */
import Button from 'src/components/button';

export default function Page() {
  return (
    <>
      <h1>Absolute Import Test</h1>
      <Button />
    </>
  );
}
