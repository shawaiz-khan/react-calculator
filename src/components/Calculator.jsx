import Numbers from "./Numbers";
import Screen from "./Screen";
import { HorizontalSpecialButtons, VerticalSpecialButtons } from "./SpecialButtons";

export default function Calculator() {
    return (
        <div className='bg-gray-950 px-3 py-7 shadow-lg shadow-black rounded-xl outline outline-white outline-1'>
            {/* Screen Start */}
            <div className="screen text-white bg-gray-900 w-full px-3 py-5 mb-5 rounded-md"><Screen /></div>
            {/* Buttons and Numbers Start */}
            <div className="flex gap-3">
                <div className="flex flex-col gap-3 w-full">
                    <HorizontalSpecialButtons />
                    <Numbers />
                </div>
                <VerticalSpecialButtons />
            </div>
        </div>
    );
}
