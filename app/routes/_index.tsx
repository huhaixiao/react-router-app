import { Welcome } from "../welcome/welcome";
import { sleep } from '~/utils';

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  await sleep(5000);
  return {
    message: 'Hello World',
  }
}

export default function Home({ loaderData }: { loaderData: { message: string } }) {
  return (
    <>
      <Welcome />
      <p>{loaderData.message}</p>
    </>
  )
}
