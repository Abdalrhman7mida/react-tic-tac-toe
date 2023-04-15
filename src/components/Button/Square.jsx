import {React,useState} from "react";
import './Square.css'

export function Square({value, onSquareClick}) {
    return (
        <button 
        className="square"
        onClick={onSquareClick} 
        >
            {value}
        </button>
    );
}