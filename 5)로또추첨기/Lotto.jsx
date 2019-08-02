const React = require('react');
const {Component, useState, useRef} = React;
const Ball = require('./Ball')


function getWinNumbers(){
  const candidate = Array(45).fill().map((v,i) => i+1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0,6).sort((p,c)=> p-c);
  return [...winNumbers, bonusNumber];
}



class Lotto extends Component{
  state = {
    winNumbers: getWinNumbers(), //당첨 숫자들
    winBalls:[],
    bonus:null, // 보너스 공
    redo:false, // 재실행
  }

  timeouts =[];

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), //당첨 숫자들
      winBalls:[],
      bonus:null, // 보너스 공
      redo:false, // 재실행
    })
    this.timeouts =[];
  }

  runTimeouts = () => {
    const {winNumbers} = this.state
    for(let i = 0 ; i < winNumbers.length - 1; i++){
      this.timeouts[i] = setTimeout(()=>{
        this.setState((pre)=>{
          return{
            winBalls:[...pre.winBalls, winNumbers[i]],
          }
        })
      }, 500 * (i + 1 ));
    }

    this.timeouts[6] = setTimeout(()=>{
      this.setState({
        bonus:winNumbers[6],
        redo:true
      })
    },3500)
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.winBalls.length === 0 ){
      this.runTimeouts();
    }
  }

  componentDidMount(){
    this.runTimeouts();
  }

  componentWillUnmount(){
    this.timeouts.forEach(t=>clearTimout(v));
  }

  render(){
    const {winBalls, bonus, redo} = this.state;
    return(
      <>
        <div>당첨 숫자</div>
        <div id="result-div">
          {winBalls.map(v => <Ball key={v} number={v}/>)}
        </div>
        <div>Bonus</div>
        {bonus && <Ball number={bonus}/>}
        {bonus && <button onClick={redo ? this.onClickRedo : () => {}}>one more time</button>}
      </>
    )
  }
}

module.exports = Lotto;
