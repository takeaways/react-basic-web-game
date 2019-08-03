const React = require('react');
const {memo,Component, useMemo,useState, useRef, useCallback} = React;
//const {dispatch} = require('./Tick');

const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) => {
const onClickTd = useCallback(() => {
  if(cellData){
    return;
  }
  dispatch({
    type:'CLICK_CELL', row:rowIndex, cell:cellIndex
  });
  },[cellData]);

  return <td onClick={onClickTd}>{cellData}</td>
});



module.exports = Td;
