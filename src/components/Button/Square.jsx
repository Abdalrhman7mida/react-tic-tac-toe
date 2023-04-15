import {React,useMemo} from "react";
import './Square.css'

export function Square({value, onSquareClick}) {
    const buttonContent = useMemo(() => {
        return value ? value: "";
    }, [value])
    return (
        <button 
        className="square"
        onClick={onSquareClick} 
        >
            {buttonContent}
        </button>
    );
}