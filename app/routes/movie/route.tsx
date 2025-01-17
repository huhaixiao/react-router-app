import { Outlet } from "react-router";

export default function () {
    return <div className="container mx-auto columns-1 flex flex-col items-center gap-2">
        <div>movie layout</div>
        <Outlet />
    </div>
}
