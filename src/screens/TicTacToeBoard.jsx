import { React, useState } from "react";

import { Square } from '../components/Button/Square'

function TicTacToeBoard() {
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) return;

        const nextSquares = [...squares];
        if (squares[i]) return;
        xIsNext ? nextSquares[i] = "x" : nextSquares[i] = "o";

        setSquares(nextSquares);
        setxIsNext(prevValue => !prevValue);
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <>
        <div className="status">{status}</div>
        {[0, 3, 6].map((start) => (
          <div key={start} className="board-row">
            {squares.slice(start, start + 3).map((value, index) => (
              <Square
                key={start + index}
                value={value}
                onSquareClick={() => handleClick(start + index)}
              />
            ))}
          </div>
        ))}
      </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const len = lines.length;
    for (let i = 0; i < len; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a]){
            return squares[a];
        }
        // i face a problem with the follwing checking, it's not working properly if there is a winner with the last play with no any null positions last.   
        // else if (!squares.includes(null)) {
        //     return "draw";
        // }
    }
    return null;
}
export default TicTacToeBoard;