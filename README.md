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
    npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

    @bable/core : 기본 바벨기능이 들어 있는 부분
    @babel/preset-env : 환경에 맞게 알아서 바꿔주는것
    @babel/preset-ract : react 지원
    babel-loader : 바벨 웹팩 연결


    [파일 생성!]
    webpack.config.js
    presets 는 plugins의 모음이다! 별도의 설정을 또 할 수있다. 2)끝말잇기 webpack.config.js 파일 참고


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
___
### 4 - 2 웹팩 설치 및 사용해보기
<pre>
  <code>
    webpack-dev-server & hot-loader !!

    npm i -D react-hot-loader webpack-dev-server

    1) package.json 다음 수정해주기
    "scripts": {
      "dev": "webpack-dev-server --hot"
    }

    2) client.js파일 변경
    const WordRelay = require('./WordRelay');
    const {hot} = require('react-hot-loader/root');

    const Hot = hot(WordRelay)
    ReactDOM.render(<Hot/>, document.querySelector('#root'));

    3) webpack.config.js fix
    plugins:[
      '@babel/plugin-proposal-class-properties',
      'react-hot-loader/babel' <-- 추가
    ]


  </code>
</pre>

## 5 숫자 야구게임 만들어 보기
<pre>
<code>
  shouldComponentUpdate
  PureComponent & React.memo
</code>
</pre>

## 6 반응체크!
<pre>
<code>
  react는 자바스크립트만 담당하는 겁니다!!
  !
</code>
</pre>

## 7 리액트 라이프사이틀
<pre>
<code>
  훅스에서는 라이프 사이클이 업습니다..
  그래서!
  useEffect(()=>{ //componentDidMount, componentDidUpdate
      return () => {
        //componentWillUnmount
      }
  },[바뀌는 state를 넣어 주세요])

  componentDidMount(){비동기 요청} <-- 최초 렌더가 될 떄만!!
  componentDidUpdate(){}  <-- 리렌더링 후
  componentWillUnmount(비동기 요청 정리) <-- 컴포넌트가 제거되기 직전!!

  class -> constructor -> render -> ref -> componentDidMount -> (setState/props) -> render -> shouldComponentUpdate -> render -> componentDidUpdate -> componentWillUnmount -> 소멸


</code>
</pre>

## 8 로또 추첨기
<pre>
<code>
  반복문을 기점으로 컴포넌트를 만들어 준다!
  for() { <-- let을 사용할 경우 es6로 오면서 클로저 문제가 안생깁니다.
    setTimout
  }


 훅스를 사용하게 되면 전체 적으로 리렌더링이 되기 때문에 시간이 오래 걸리는 함수가 있다면 useMemo 를 사용하여 리턴 값을 기역하게(캐싱) 해줘야 한다!!

 useRef: 일반 값을 기억

 useCallback: 함수 자체를 기억
</code>
</pre>

## 9 틱텍톡
<pre>
<code>
  memo 사용해서 성능 최적화!
</code>
</pre>

## 10 지뢰찾기
<pre>
<code>
  Context API
</code>
</pre>
