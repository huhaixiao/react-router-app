export default function ({ params }: { params: { '*': string } }) {
    const path = params['*'];
    return <div>
        This is $, a Splat Route, U are visiting {path}
    </div>
}
