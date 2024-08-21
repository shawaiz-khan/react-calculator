/* eslint-disable react/prop-types */
export default function Screen({ input, result }) {
    return (
        <div className="text-white bg-gray-900 w-full px-3 py-3 mb-5 rounded-md h-16 overflow-auto scrollbar-none">
            <div className="relative h-full">
                <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-xl">
                    <span className="text-center text-white">{result !== null ? result : input}</span>
                </div>
            </div>
        </div>
    );
}
