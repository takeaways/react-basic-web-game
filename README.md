"# react-basic-web-game"

## 1 리액트란 무엇인가? 왜 쓰는가?
<pre>
<code>
  1) 싱글페이지 애플리케이션
    -> 화면의 깜빡임이 없이 자연스럽게 화면을 전환 시키며 앱과 비슷한 사용자 경험을 제공하기 위해서 사용!
    -> 재사용 컴포넌트, 데이터 - 화면일치
</code>
</pre>

## 2 구구단 게임 만들기
<pre>
<code>
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  react = 리액트의 기능을 담고 있는 js
  react-dom = 컴포넌트를 화면애 보여주기 위한 js (웹에 붙이기 기능)

  <div id="root"></div>
  <script>
    const e = React.createElement;
    class LikeButton extends React.Component{
      constructor(props){
        super(props);
      }

      render(){
        return e('button',{onClick:()=>{console.log('clicked')}, type:'submit' },'Like') //<button>Like</button>
      }
    }
  </script>
  <script>
    ReactDOM.render(e(LikeButton), document.querySelector('#root'));
  </script>

</code>
</pre>

### 2 - 1 JSX와 바벨
<pre>
<code>
  자바스크립트 안에 테크를 사용하는 문법!!
  컴포넌의 장점!!
   1) 원하는 만큼 만들어 낼 수 있다

  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</code>
</pre>

### 2 - 2 구구단 게임 react로 만들어 보기
<pre>
<code>
  input 에다 focus 주기
</code>
</pre>

## 3 React Hook 사용하기
<pre>
<code>
  1) 리액트의 표준이 훅스로!!

  class -> className
  for -> htmlForm

  2) useState -> setState를 한 번에 모아서!! 비동기 처리!
</code>
</pre>

## 4 웹팩 설치 및 사용해보기
<pre>
  <code>
    nodejs => 자바스크립트 실행기!! 서버가 아닙니다
    npm i react react-dom
    npm i -D webpack webpack-cli
    npm i -D @bable/core @babel/preset-env @babel/preset-ract babel-loader

    @bable/core : 기본 바벨기능이 들어 있는 부분
    @babel/preset-env : 환경에 맞게 알아서 바꿔주는것
    @babel/preset-ract : react 지원
    babel-loader : 바벨 웹팩 연결


    [파일 생성!]
    webpack.config.js

    const path = require('path');

    module.exports = {
      name:'WordRelay-setting',
      mode:'development', //실서비스: production
      devtool:'eval', //빠르게
      resolve:{extensions:['.js','.jsx']},


      entry:{
        app:['./client'],
      },//입력

      module:{
        rules:[{
          test:/.jsx?/, //js or jsx 에 적용하겠다
          loader:'babel-loader', //바벨을 적용하겠다.
          options:{
            presets:['@babel/preset-env', '@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties']
          },
        }]
      },

      output:{
        path:path.join(__dirname,'dist'),  //__dirname은 현제 폴더
        filename:'app.js',
      }, // 출력
    }


  </code>
</pre>
