import { useParams } from "react-router-dom"

export default function User () {
    let {userId} = useParams()
    return  (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                This is User <span className="text-orange-600">{userId}</span>
            </h1>
        </div>
    )
}