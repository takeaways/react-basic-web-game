const React = require('react');
const {Component, useState, useRef, useEffect, useMemo, useCallback} = React;
const Ball = require('./Ball')


function getWinNumbers(){
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v,i) => i+1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0,6).sort((p,c)=> p-c);
  return [...winNumbers, bonusNumber];
}



const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers, []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState([]);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus([]);
    setRedo(false);
    timeouts.current = [];
  },[]);

  const runTimeouts = () => {
    for(let i = 0 ; i < winNumbers.length - 1; i++){
      timeouts.current[i] = setTimeout(()=>{
        setWinBalls((prev) => [...prev, winNumbers[i]]);
      }, 500 * (i + 1 ));
    }

    timeouts.current[6] = setTimeout(()=>{
      setBonus(winNumbers[6]);
      setRedo(true);
    },3500)
  }

  useEffect(()=>{
    if(setWinBalls.length <= 6){
      console.log("??")
        runTimeouts();
    }
    return () => {
      if(winBalls.length === 0){
        console.log(winBalls.length)
        timeouts.current.forEach(t=>clearTimeout(t));
      }
    }
  },[timeouts.current])

  return(
    <>
      <div>당첨 숫자</div>
      <div id="result-div">
        {winBalls.map(v => <Ball key={v} number={v}/>)}
      </div>
      <div>Bonus</div>
      {bonus && <Ball key={bonus} number={bonus}/>}
      {bonus && <button onClick={redo ? onClickRedo : () => {}}>one more time</button>}
    </>
  )
}


module.exports = Lotto;
