import { sleep } from "~/utils";
import type { Route } from './+types/$';

export async function clientLoader() {
    await sleep(3000);
    return {
        message: 'hello world'
    }
}

export default function ({ params, loaderData }: Route.ComponentProps) {
    const path = params['*'];
    return <div>
        <div>Splate Route $.tsx, 404 页面</div>
        <div>Path: {path}</div>
        <div>Data.message: {loaderData.message}</div>
    </div>
}
