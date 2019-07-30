const React = require('react');
const ReactDOM = require('react-dom');
const WordRelay = require('./WordRelay');
const {hot} = require('react-hot-loader/root');

const Hot = hot(WordRelay)
ReactDOM.render(<Hot/>, document.querySelector('#root'));
