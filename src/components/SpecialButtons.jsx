/* eslint-disable react/prop-types */
function HorizontalSpecialButtons({ operatorClick, clearClick, delClick  }) {
    return (
        <div className="flex gap-3 w-fit h-fit">
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center" onClick={clearClick}>AC</button>
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center" onClick={delClick}>DEL</button>
            <button className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 font-bold hover:bg-gray-300 transition duration-300 flex items-center justify-center" onClick={() => operatorClick("-")}>+/-</button>
        </div>
    );
}

function VerticalSpecialButtons({ operatorClick, equalClick }) {
    return (
        <div className="flex flex-col gap-3 w-fit">
            <button className="bg-purple-600 text-white rounded-full w-12 h-12 font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center" onClick={() => operatorClick("/")}>÷</button>
            <button className="bg-purple-600 text-white rounded-full w-12 h-12 font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center" onClick={() => operatorClick("*")}>x</button>
            <button className="bg-purple-600 text-white rounded-full w-12 h-12 font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center" onClick={() => operatorClick("-")}>-</button>
            <button className="bg-purple-600 text-white rounded-full w-12 h-12 font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center" onClick={() => operatorClick("+")}>+</button>
            <button className="bg-purple-600 text-white rounded-full w-12 h-12 font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center" onClick={equalClick}>=</button>
        </div>
    );
}

export {
    HorizontalSpecialButtons,
    VerticalSpecialButtons
};