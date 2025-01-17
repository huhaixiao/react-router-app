export default function ({ params }: { params: { name: string; age: string } }) {
    return <div>
        <div>age: {params.age}</div>
    </div>
}
