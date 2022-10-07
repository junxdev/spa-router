import { useRouter } from '../router/router';

export function Root() {
  const { push } = useRouter();

  return (
    <div>
      <h1>root</h1>
      <button onClick={() => push('/about')}>about</button>
    </div>
  );
}
