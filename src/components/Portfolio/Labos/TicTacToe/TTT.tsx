import React, { useState } from 'react';
import styles from './TTT.module.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(['','','','','','','','','']);
  const [player, setPlayer] = useState('X');

  const play = (index: number) => {
    if (board[index] === '') {
      board[index] = player;
      setBoard(board);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const getWinner = () => {
    let winPositions = [
      [0,1,2],
      [3,4,5], 
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
    ];

    for (let positions of winPositions) {
      if (board[positions[0]] == board[positions[1]] && board[positions[1]] == board[positions[2]]) {
        return board[positions[0]]
      }
    }
  }

  return (
    <div className={styles.TTT}>
    <h1>Tic Tac Toe</h1>
    <p>In this assignment it was the goal to create a raster where you would be able to play the game tic tac toe in</p>
    <div className='playingfield'
    style={{
        display: 'grid',
        gridTemplateRows: '50px 50px 50px',
        gridTemplateColumns: '50px 50px 50px',
        justifyContent: 'center'
      }}>
      {board.map((element, index) =>
          <div
            key={index}
            onClick={() => play(index)}
            style={{
              border: '1px solid black',
              fontSize: '30px',
              textAlign: 'center',
            }}
          >
            {element}
          </div>
      )}
      {getWinner() && <p style={{gridColumnStart: 1, gridColumnEnd: "span 3"}}>{getWinner()} WINS!</p>}
    </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <TicTacToe />
    </>
  );
};

export default () => <App />;