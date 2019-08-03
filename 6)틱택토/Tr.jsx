const React = require('react');
const {Component, memo,useMemo, useState, useRef, useCallback} = React;
const Td = require('./Td');

const Tr = memo(({rowData, rowIndex, dispatch}) => {
  return (
      <tr>
        {Array(rowData.length).fill().map((td,i) => useMemo(
          ()=><Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} key={i}>{''}</Td>,
          [rowData[i]]
      ))}
      </tr>
  )
});



module.exports = Tr;
