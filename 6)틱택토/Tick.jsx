const React = require('react');
const {Component, useEffect,useState, useRef, useCallback, useReducer} = React;
const Table = require('./Table');


const initialState = {
  winner:'',
  turn:'o',
  tableData : [
    ['','',''],
    ['','',''],
    ['','','']
  ],
  recentCell:[-1,-1]
}

const reducer = (state, action) => {
  switch(action.type){
    case 'SET_WINNER':
      return{
        ...state,
        winner:action.winner,
      };
    case 'CLICK_CELL':
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return{
        ...state,
        tableData,
        recentCell:[action.row, action.cell]
      }
    case 'SET_TURN':
      return{
        ...state,
        turn: state.turn === 'o' ? 'x' : 'o'
      }
    case 'RESET':
      return{
        ...state,
        turn:'o',
        tableData : [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        recentCell:[-1,-1]
      }
    default:
      return state;
  }
}

const Tick = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {tableData, turn, winner, recentCell} = state;


  useEffect(()=>{
    const [row, cell] = recentCell;
    if(row < 0) return ;
    let win = false;
    if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
      win = true;
    }
    if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
      win = true;
    }
    if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
      win = true;
    }
    if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
      win = true;
    }
    if(win){
      dispatch({
        type:'SET_WINNER', winner:turn
      })
      dispatch({type:'RESET'})
    }else{
      let all = true;
      tableData.forEach(row => {
        row.forEach(cell=>{
          if(!cell){
            all = false;
          }
        })
      })
      if(all){
        dispatch({type:'RESET'})
      }else{
        dispatch({
          type:'SET_TURN'
        })
      }
    }

  },[recentCell])

  return (
    <>
      <Table tableData={tableData} dispatch={dispatch}/>
      {winner && <div>{winner} win!</div>}
    </>
  )
};



module.exports = Tick;
