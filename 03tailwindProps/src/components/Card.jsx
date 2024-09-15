export default function Card({title, offers, price, duration, plan, color}) {
    console.log({offers, price, duration, plan, color})
    return (
        <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
        <div className={`pt-22 relative mx-auto max-w-sm rounded-lg ${color} px-10 pb-16 `}>
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
            <div className={`flex-shrink-0 rounded-full ${color} px-5 py-4 text-sm font-semibold uppercase text-white`}>
                {title}
            </div>
            </div>
            <span className="mb-2 block pt-10 text-sm font-semibold text-white">
            {plan}
            </span>
            <span className="flex items-end text-white">
            <span className="text-4xl font-extrabold leading-none">{price}$</span>
            <span className="text-sm font-semibold">/{duration}</span>
            </span>
            <div className="mt-7 border-t border-orange-500 pt-5">
            <ul className="mb-10">
                {offers.map((offer, index) => 
                <li className="mb-6 flex items-center" key={index}>
                <span className="ml-2 text-sm text-white">{offer}</span>
                </li>
                )}
            </ul>
            <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Choose Plan
            </button>
            </div>
        </div>
        </div>
    )
}