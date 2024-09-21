import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile () {
    const {user} = useContext(UserContext)

    if (!user) return <div>please login</div>

    return (
        <>
        <h3 className="text-4xl font-semibold text-blue-300">
            {`Welcome, ${user.username} ;)`}
        </h3>
        </>
    )
}