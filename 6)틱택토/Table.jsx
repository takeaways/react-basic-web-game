const React = require('react');
const {Component, useState, useRef, useCallback} = React;
const Tr = require('./Tr');
const Table = ({tableData, dispatch}) => {
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i)=><Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>)}
    </table>
  )
};



module.exports = Table;
