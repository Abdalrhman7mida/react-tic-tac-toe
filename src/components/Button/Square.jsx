import {React,useState} from "react";
import './Square.css'

export function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('x');
    }

    return (
        <button 
        className="square" 
        onClick={handleClick}
        >
            {value}
        </button>
    );
}