export default function CardHolder({children}) {
    return(
        <div className="bg-gray-400 p-3 rounded-sm flex justify-between">
            {children}
        </div>
    )
}