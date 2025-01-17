import { sleep } from "~/utils"

export async function loader() {
    await sleep(1);
    return {
        message: 'hello world',
    }
}

export default function ({ loaderData }: { loaderData: { message: string } }) {
    return (
        <>
            <p>Server Sider Rendering</p>
            <p>loaderData.message: {loaderData.message}</p>
        </>
    )
}
