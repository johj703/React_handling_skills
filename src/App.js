import './App.css';

function App() {
  // const = 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용
  // let = 동적인 값을 담을 수 있는 변수를 선언할 때 사용
  // let, const는 scope가 함수 단위가 아니라 블록 단위다.
  const name = '리액트';
  const style = {
  // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기볍으로 작성된다.
  backgroundColor: 'black',
  color: 'aqua',
  fontSize: '48px',
  fontWeight: 'bold',
  padding: 16
  };
  return <div style={style}>{name}</div>
}

export default App;
