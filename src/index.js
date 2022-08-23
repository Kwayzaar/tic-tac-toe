import React from "react";
import ReactDOM from "react-dom";
import './index.css'

// const gameStyles = {
//   background: '#f4a261',
//   margin: 10,
//   padding: 20,
// }

const Square = (props) => {
  return (
    <div className="square">
      {props.value}
    </div>
  )
}

const Board = () => {
  const renderSquare = (i) => {
    return (
      <Square value={i} />
    )
  }

  return (
    <div className="board">
      Board
      <div className="board-row">
        {renderSquare(1)}{renderSquare(2)}{renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}{renderSquare(5)}{renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}{renderSquare(8)}{renderSquare(9)}
      </div>
    </div>
  )
}


const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  )
};

ReactDOM.render(
  <Game />, 
  document.getElementById("root")
);
