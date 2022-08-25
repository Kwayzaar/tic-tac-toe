import React, { useState } from "react"
import * as ReactDOM  from "react-dom/client"
import './index.css'



const Game = () => {
  return (
    <div className="game">
        Game 
        <Board />
    </div>
  )
}

const Board = () => {
  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  const [squares, setSquares] = useState(initialSquares)

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]}/>
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

const Square = (props) => {

  return (
    <button 
      className="square" 
      onClick={() => {}}>
      {props.value}
    </button>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root'),
  )
root.render(<Game />)

// ReactDOM.render(
//   <Game />, 
//   document.getElementById('root')
// )