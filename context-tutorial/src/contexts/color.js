import { createContext, useState } from 'react';

const ColorContext = createContext({
    // createContext의 기본 값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다
    // 그렇게 하면, Context 코드를 볼 때, 내부 값이 어떻게 구성되어 있는지 파악하기 쉽고, 실수로 Provider를
    // 사용하지 않았을 대 리액트 어플리케이션에서 에러가 발생하지 않는다.
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubcolor] = useState('red');

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubcolor }
    };
    return (
        // Provider의 value에서 상태는 state로 , 업데이트 함수는 actions로 묶어서 전달하고 있다
        // state와 actions 객체를 따로따로 분리해 주면 나중에 다른 컴포넌트에서 Context의 값을 사용할 대 편하다.
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;