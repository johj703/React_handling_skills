import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}
// 함수형 컴포넌트의 장점
// 1. 클래스형 컴포넌트보다 선언하기가 훨씬 편하다.
// 2. 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
// 3. 프로젝트를 완성하여 빌드한 후, 배포할 때 함수 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작다.
//
// 단점
// 1. state와 라이프사이클 API의 사용이 불가능하다. => 리액트 v16.8 업데이트 이후 Hooks라는 기능이 도입되면서 해결
export default App;
