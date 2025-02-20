import type { Route } from "./+types/route";

export function loader({ }: Route.LoaderArgs) { }

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    const access_token = localStorage.getItem('access_token');
    const response = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    const result = await response.json();

    localStorage.setItem('user', JSON.stringify(result));

    return result;
}

clientLoader.hydrate = true as const;

export default function ({ loaderData }: Route.ComponentProps) {
    const user = loaderData;

    if(!user) {
        return null;
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <div className="flex items-center space-x-4">
                    <img className="w-16 h-16 rounded-full" src={user.avatar_url} alt="User Avatar" />
                    <div>
                        <h2 className="text-xl font-semibold">{user.login}</h2>
                        <p className="text-gray-600">{user.name || 'No name provided'}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p><strong>Email:</strong> {user.email || 'No email provided'}</p>
                    <p><strong>Location:</strong> {user.location || 'No location provided'}</p>
                    <p><strong>Company:</strong> {user.company || 'No company provided'}</p>
                    <p><strong>Bio:</strong> {user.bio || 'No bio provided'}</p>
                    <p><strong>Public Repos:</strong> {user.public_repos}</p>
                    <p><strong>Public Gists:</strong> {user.public_gists}</p>
                    <p><strong>Followers:</strong> {user.followers}</p>
                    <p><strong>Following:</strong> {user.following}</p>
                    <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                    <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
                </div>
                <div className="mt-4">
                    <a href={user.html_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
                </div>
            </div>
        </div>
    );
}