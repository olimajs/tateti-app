import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {  
    return (
      <button className="square" 
        onClick={props.onClick}>    
          {this.props.value}
        </button>
    ); /*aca arriba va la funcion para el click y aparece la x en el tateti*/
}
 

class Board extends React.Component { /* el board tambien es un comp de react*/
    constructor(props) {
      super(props);
      this.state = {
          squares: Array(9).fill(null),    /*aca para avisar cuando se llenan los 9 y salte null*/
       xIsNext: true,
      }
  }

  handleClick(i){
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
    })
  }
  renderSquare(i) {  
      return <Square 
      value = {this.state.squares [i]} 
      onClick={() => this.handleClick(i)}
    />;
  }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {  /* y el game tamb es un comp de react*/
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
