import React, { useState } from "react"
import * as ReactDOM  from "react-dom/client"
import './index.css'

const Square = (props) => {

  return (
    <button 
      className="square" 
      onClick={props.onClickEvent}>
      {props.value}
    </button>
  )
}

const Board = () => {
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(initialSquares)
  const [xIsNext, setxIsNext] = useState(true)

  const renderSquare = (i) => {
    return (
      <Square 
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
      />
    )
  }

  const handleClickEvent = (i) => {
    // 1. Copy state array 
    const newSquares = [...squares]
    // 2. Mutate copy, set i-th element to xIsNext
    newSquares[i] = xIsNext ? 'X' : 'O'
    // 3. Call setSquares function w/ mutated copy 
    setSquares(newSquares)
    setxIsNext(!xIsNext)
  }
  const status = `Current player: ${!xIsNext ? 'O' : 'X'}`
  
  return (
    <div>
      <div className="status">{status}</div>
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
        Tic-Tac-Toe 
        <Board />
    </div>
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