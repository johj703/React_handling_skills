import logo from './logo.svg';
import './App.css';

function App() {
  // const = 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용
  // let = 동적인 값을 담을 수 있는 변수를 선언할 때 사용
  // let, const는 scope가 함수 단위가 아니라 블록 단위다.
  const name = '리액트';
  return (
    <div>
      {name === '리액트' && 
        <h1>리액트 입니다.</h1>
      }
    </div>
  );
}

export default App;
