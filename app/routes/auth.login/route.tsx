'use client';

const client_id = 'Ov23li4PLZixDD5NHR4m';
const client_secret = '1998365fd65d2575cd8ad85f3dd7984e193a9276';

export default function () {
    return <div className="w-screen h-screen flex justify-center items-center">
        <button onClick={() => {
            const searchParams = new URLSearchParams({
                client_id,
                redirect_uri: `${window.location.origin}/auth/callback`,
                scope: 'user'
            });
            window.location.assign(`https://github.com/login/oauth/authorize?${searchParams.toString()}`);
        }}>login</button>
    </div>
}
