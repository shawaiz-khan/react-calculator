function HorizontalSpecialButtons() {
    return (
        <div className="flex gap-3 w-fit h-fit">
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center">AC</button>
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center">DEL</button>
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center">+/-</button>
        </div>
    );
}

function VerticalSpecialButtons() {
    return (
        <div className="flex flex-col gap-3 w-fit">
            <button className="bg-orange-400 text-white rounded-full w-12 h-12 font-bold hover:bg-orange-500 transition duration-300 flex items-center justify-center">÷</button>
            <button className="bg-orange-400 text-white rounded-full w-12 h-12 font-bold hover:bg-orange-500 transition duration-300 flex items-center justify-center">x</button>
            <button className="bg-orange-400 text-white rounded-full w-12 h-12 font-bold hover:bg-orange-500 transition duration-300 flex items-center justify-center">-</button>
            <button className="bg-orange-400 text-white rounded-full w-12 h-12 font-bold hover:bg-orange-500 transition duration-300 flex items-center justify-center">+</button>
            <button className="bg-orange-400 text-white rounded-full w-12 h-12 font-bold hover:bg-orange-500 transition duration-300 flex items-center justify-center">=</button>
        </div>
    );
}

export {
    HorizontalSpecialButtons,
    VerticalSpecialButtons
};