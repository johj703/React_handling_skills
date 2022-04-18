import './App.css';

function App() {
  // const = 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용
  // let = 동적인 값을 담을 수 있는 변수를 선언할 때 사용
  // let, const는 scope가 함수 단위가 아니라 블록 단위다.
  const name = '리액트';
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나
      /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default App;
