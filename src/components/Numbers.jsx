/* eslint-disable react/prop-types */
export default function Numbers({ numberClick, operatorClick }) {
    return (
        <div className="flex gap-3 w-fit">
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(7)}>7</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(4)}>4</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(1)}>1</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => operatorClick('%')}>%</button>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(8)}>8</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(5)}>5</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(2)}>2</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(0)}>0</button>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(9)}>9</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(6)}>6</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => numberClick(3)}>3</button>
                <button className="bg-gray-900 text-white rounded-full w-12 h-12 font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center" onClick={() => operatorClick('.')}>.</button>
            </div>
        </div>
    );
}
