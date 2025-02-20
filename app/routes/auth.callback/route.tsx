'user server';

import { useSearchParams, useNavigate } from "react-router";
import type { Route } from "./+types/route";
import { useEffect } from "react";

const client_id = 'Ov23li4PLZixDD5NHR4m';
const client_secret = '1998365fd65d2575cd8ad85f3dd7984e193a9276';

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code') as string;
    const searchParams = new URLSearchParams({
        client_id,
        client_secret,
        code,
    });
    const response = await fetch(`https://github.com/login/oauth/access_token?${searchParams}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json"
        }
    });
    const json = response.json() as unknown as { access_token: string; token_type: 'bearer', scope: 'user' };

    return json;
}

export default function ({ loaderData }: Route.ComponentProps) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const code = searchParams.get('code');

    useEffect(() => {
        if (loaderData?.access_token) {
            localStorage.setItem('github_oauth2_access_token', loaderData.access_token);
            localStorage.setItem('github_oauth2_token_type', loaderData.token_type);
            localStorage.setItem('github_oauth2_scope', loaderData.scope);
            navigate('/auth/user');
        }
    }, [loaderData]);

    return <div>
        <div>auth callback</div>
        <div>code: {code}</div>
        <div>loaderData: {JSON.stringify(loaderData)}</div>
    </div>;
}
