/**
 * app/error-test/page.tsx
 *
 * ページ内でエラーがthrowされたらerror.tsxのエラーページが表示される。
 */
type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page(props: Props) {
  const error = props.searchParams?.error;
  if (error) {
    throw new Error('ERROR!!!!!');
  }
  return <h1>Error Test</h1>;
}
