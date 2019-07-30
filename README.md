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

### 2 - 1 구구단 게임 만들기
