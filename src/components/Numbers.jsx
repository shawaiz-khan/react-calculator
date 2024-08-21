export default function Numbers() {
    return (
        <div className="flex gap-3 w-fit">
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">7</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">4</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">1</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">%</button>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">8</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">5</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">2</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">0</button>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">9</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">6</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">3</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center">.</button>
            </div>
        </div>
    )
}
