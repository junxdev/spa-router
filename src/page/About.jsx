import { useRouter } from '../router/router';

export function About() {
  const { push } = useRouter();

  return (
    <div>
      <h1>about</h1>
      <button onClick={() => push('/')}>go main</button>
    </div>
  );
}
