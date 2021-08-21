import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  return (
    <button className='bg-white border border-gray-400 float-left font-bold leading-9 h-9 w-9 -mt-px -ml-px p-0 text-center'>
      {props.value}
    </button>
  );
};

const Board = () => {
  const status = 'Next player: X';

  const renderSquare = (i) => {
    return <Square value={i} />;
  }

  return (
    <div>
      <div className='mb-2.5'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className='flex flex-row m-5'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='ml-5'>
        <div>{/* status */}</div>
        <ol className='pl-7'>{/* TODO */}</ol>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);