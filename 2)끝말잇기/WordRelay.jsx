const React = require('react');
const {Component,} = React;


class WordRelay extends Component{
  state = {
    word:'리액트',
    value:'',
    result:'',
  }

  onChange = (e) => {
    this.setState({
      value:e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length-1] === this.state.value[0]){
      this.setState((prev)=>{
        return {
          result:'정답',
          word:prev.value,
          value:''
        }
      })
      this.input.focus();
    }else{
      this.setState({
        result:'땡!'
      })
    }

  }

  input;
  onRefInput = (c) => {
    this.input = c
  }


  render(){
    return (
      <>
        <div>단어: {this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
          <button type="submit">click</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}


module.exports = WordRelay;
