import ColorBox from "./components/ColorBox";
import ColorContext from './contexts/color';

// 기존 createContext 함수를 사용할 때는 파라미터로 Context의 기본값을 넣어 주었지만,
// 이 기본 값은 Provider를 사용하지 않았을 때만 사용된다. 만약 Provider는 사용했는데 value를
// 명시하지 않았다면, 이 기본값을 사용하지 않기 때문에 오류가 발생한다.
const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;