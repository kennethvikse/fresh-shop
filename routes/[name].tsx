// routes/greet/:name.tsx

import { PageProps } from "$fresh/server.ts";

export default function GeetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}
