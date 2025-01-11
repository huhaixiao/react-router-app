export default function City({ params }: { params: { city: string } }) {
    return <span>{params.city}</span>
}