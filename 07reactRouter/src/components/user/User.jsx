import { useParams } from "react-router-dom"

export default function User () {
    let userId = useParams()
    return  (
        <>
            <h1>This is a User: {userId}</h1>
        </>
    )
}