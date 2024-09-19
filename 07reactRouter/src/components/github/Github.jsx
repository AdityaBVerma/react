import { useEffect, useState } from "react"

export default function Github () {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://api.github.com/users/AdityaBVerma", {
        headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        },
        })
        .then(response => response.json())
        .then(data => {setData(data)})
        .catch((error) => console.error('Error fetching data:', error))
    }, [])

    if (!data) {
        return <p>Loading...</p>
    }
    
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-orange-600 p-6">
            <div className="flex items-center">
            <img
                className="w-24 h-24 rounded-full border-4 border-white"
                src={data.avatar_url}
                alt="Profile"
            />
            <div className="ml-6">
                <h2 className="text-2xl text-white font-bold">{data.name}</h2>
                <p className="text-white opacity-90">@{data.login}</p>
                <p className="text-white mt-1">{data.location}</p>
            </div>
            </div>
        </div>
        <div className="p-6">
            <p className="text-orange-600 font-semibold mb-2">Bio</p>
            <p className="text-gray-700">{data.bio}</p>
            <div className="mt-4">
            <a
                href={data.html_url}
                className="text-orange-600 hover:text-orange-500 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub Profile
            </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{data.followers}</p>
                <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{data.following}</p>
                <p className="text-gray-500">Following</p>
            </div>
            <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{data.public_repos}</p>
                <p className="text-gray-500">Repositories</p>
            </div>
            <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{data.public_gists}</p>
                <p className="text-gray-500">Gists</p>
            </div>
            </div>
            <div className="mt-6">
            <p className="text-gray-500">Member since: {new Date(data.created_at).toLocaleDateString()}</p>
            <p className="text-gray-500">Last updated: {new Date(data.updated_at).toLocaleDateString()}</p>
            </div>
        </div>
        </div>
    );
}