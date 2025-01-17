import { Outlet } from "react-router";

export default function ({ params }: { params: { name: string } }) {
    return (
        <>
        <div>name: {params.name}</div>
        <Outlet/>
        </>
    )
}
