
import Board from './Board';
import { useState } from 'react';
function Game(){
    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
       
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
        
    }
    const move = history.map((squares,move) => {
        let description;
        if(move > 0){
            description = 'Go to Move #' +move;
        }
        else{
            description = 'Go to game start'
        }
        return (
            <li key={move} >
                
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });
    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                </div>
                <div className="game-info">
                    <ol>{move}</ol>
                </div>
            </div>
        </>
    )
}


export default Game