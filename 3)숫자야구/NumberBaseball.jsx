const React = require('react');
const Try = require('./Try');



function getNumbers(){
  const cand = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0 ; i < 4 ; i++){
    const chosen = cand.splice(Math.floor(Math.random() * ( 9 - i )), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseBall extends React.Component{
  state = {
    result:'',
    value:'',
    answer: getNumbers(),
    tries:[],
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.answer);
    if(this.state.value === this.state.answer.join('')){
      this.setState({
        result:'홈런!',
        tries:[String(this.state.value).split("") , ...this.state.tries]
      })
    }else{
      const answerArray = this.state.value.split('').map(v=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(this.state.tries.length >= 9){
        this.setState({
          result:`10회가 지났습니다. 답 : ${this.state.answer.join(',')}`
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          value:'',
          answer:getNumbers(),
          tries:[],
        });
      }else{
        for(let i = 0 ; i < 4 ; i++){
          if(answerArray[i] === this.state.answer[i]){
            strike += 1;
          }else if(this.state.answer.includes(answerArray[i])){
            ball += 1;
          }
        }

        this.setState({
          tries:[[String(this.state.value).split("").join(", ")], ...this.state.tries],
          value:'',

        })


      }





    }
  }

  onChange = (e) => {
    this.setState({
      value:e.target.value
    })
  }

  render(){
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} value={this.state.value} onChange={this.onChange} />
          <button>click</button>
        </form>
        <div>times : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map( (t,i) => <Try key={i} value={t} index={i}/> )}
        </ul>
      </>
    )
  }
}

module.exports = NumberBaseBall;
