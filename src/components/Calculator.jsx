import { useState } from "react";
import Numbers from "./Numbers";
import Screen from "./Screen";
import { HorizontalSpecialButtons, VerticalSpecialButtons } from "./SpecialButtons";

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (value) => {
        setInput((prevInput) => {
            return prevInput + value;
        })
    };

    const handleOperationClick = (operator) => {
        setInput((prevInput) => {
            return prevInput + operator;
        })
    };

    const handleEqualsClick = () => {
        try {
            setResult(eval(input));
        } catch (err) {
            setResult("Error");
            console.log(err);
        }
    };

    const handleClearClick = () => {
        setInput("");
        setResult(null);
    };

    const handleDeleteClick = () => {
        setInput((prevInput) => {
            return prevInput.slice(0, -1);
        })
    }

    return (
        <div className='bg-gray-950 px-3 py-7 shadow-lg shadow-black rounded-xl outline outline-white outline-1'>
            <div className="screen text-white bg-gray-900 w-full rounded-md"><Screen input={input} result={result} /></div>
            <div className="flex gap-3">
                <div className="flex flex-col gap-3 w-full">
                    <HorizontalSpecialButtons operatorClick={handleOperationClick} equalClick={handleEqualsClick} clearClick={handleClearClick} delClick={handleDeleteClick} />
                    <Numbers numberClick={handleNumberClick} operatorClick={handleOperationClick}/>
                </div>
                <VerticalSpecialButtons operatorClick={handleOperationClick} equalClick={handleEqualsClick} />
            </div>
        </div>
    );
}
