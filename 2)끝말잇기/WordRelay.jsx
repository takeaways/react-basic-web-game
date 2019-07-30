const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
  
  const [word, setWord] = useState('리액트');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const onRefInput = useRef(null);
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(word[word.length-1] === value[0]){
      setWord(value);
      setValue('');
      setResult("정답입니다.");
      onRefInput.current.focus();
    }else{
      setValue('');
      setResult('틀렸습니다.');
    }
  }

  return (
    <>
      <div>단어: {word}</div>
      <form onSubmit={onSubmit}>
        <input ref={onRefInput} value={value} onChange={onChange}/>
        <button type="submit">click!!!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

//
// class WordRelay extends Component{
//   state = {
//     word:'리액트',
//     value:'',
//     result:'',
//   }
//
//   onChange = (e) => {
//     this.setState({
//       value:e.target.value,
//     })
//   }
//
//   onSubmit = (e) => {
//     e.preventDefault();
//     if(this.state.word[this.state.word.length-1] === this.state.value[0]){
//       this.setState((prev)=>{
//         return {
//           result:'정답',
//           word:prev.value,
//           value:''
//         }
//       })
//       this.input.focus();
//     }else{
//       this.setState({
//         result:'땡!'
//       })
//     }
//
//   }
//
//   input;
//   onRefInput = (c) => {
//     this.input = c
//   }
//
//
//   render(){
//     return (
//       <>
//         <div>단어: {this.state.word}</div>
//         <form onSubmit={this.onSubmit}>
//           <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
//           <button type="submit">click</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     )
//   }
// }


module.exports = WordRelay;
