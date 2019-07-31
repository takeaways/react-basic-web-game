const React = require('react');
const {Component, useState, useRef} = React;

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();


  const onClickScreen = () => {
    if(state === 'waiting'){
        setState('ready')
        setMessage('초록색이되면 클릭하셔유~~')
        timeOut.current = setTimeout(()=>{
          startTime.current = new Date();
          setState('now')
          setMessage('지금 클릭!!')
        }, Math.floor(Math.random()*1000) + 2000)
    }else if(state === 'ready'){
        setState('waiting')
        setMessage('성급하게 클릭하지 마세요!');
        clearTimeout(timeOut.current);
    }else if(state === 'now'){
      endTime.current = new Date();
      setState('waiting')
      setMessage('클릭해서 시작하세요')
      setResult((prevResult)=>[...prevResult , endTime.current - startTime.current]);
    }
  }


  const renderAverage = () => {
    return result.length === 0
      ? null
      : <div>  Avg Time : {result.reduce((a,c)=>a+c) / result.length} ms </div>
  }

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
}

//
// class ResponseCheck extends Component{
//   state = {
//     state:'waiting',
//     message:'클릭해서 시작하세요',
//     result:[],
//
//   }
//
//   timeout;
//   startTime;
//   endTime;
//
//   onClickScreen = () => {
//     const {state, message, result} = this.state;
//     if(state === 'waiting'){
//       this.setState({
//         state:'ready',
//         message:'초록색이되면 클릭하셔유~~'
//       });
//       this.timeout = setTimeout(()=>{
//         this.setState({
//           state:'now',
//           message:'지금 클릭!!'
//         })
//         this.startTime = new Date();
//       },Math.floor(Math.random()*1000) + 2000);
//     }else if(state === 'ready'){
//       this.setState({
//         state:'waiting',
//         message:'성급하게 클릭하지 마세요!'
//       });
//       clearTimeout(this.timeout);
//     }else if(state === 'now'){
//       this.endTime = new Date();
//       this.setState((prevState) => {
//         return {state:'waiting',
//         message:'클릭해서 시작하세요',
//         result:[...prevState.result , this.endTime - this.startTime],
//       }
//       })
//     }
//   }
//
//   renderAverage = () => {
//     const {result} = this.state;
//     return result.length === 0
//       ? null
//       : <div>  Avg Time : {result.reduce((a,c)=>a+c) / result.length} ms </div>
//   }
//
//   render(){
//     return (
//       <>
//         <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
//           {this.state.message}
//         </div>
//         {this.renderAverage()}
//       </>
//     )
//   }
// }

module.exports = ResponseCheck;
