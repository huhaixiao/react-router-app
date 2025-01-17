import { useLoaderData } from "react-router";
import { sleep } from "~/utils";

export async function clientLoader() {
    await sleep(1);
    return {
        message: 'hello world'
    }
}

export default function ({ params }: { params: { '*': string } }) {
    const path = params['*'];
    const data = useLoaderData<{ message: string }>();
    console.log({
        type: 'hhx.data',
        data
    })
    return <div>
        This is $, a Splat Route, U are visiting {path} {data.message}
    </div>
}
