import { useReducer } from 'react';

function reducer(state, action) {

    switch (action.type) {
        case 'INCREMENT' :
            return { value: state.value + 1 };
        case 'DECREMENT' :
            return { value: state.value - 1 };
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

    const Counter = () => {
    // state: 현재를 가리킴, dispatch: 액션을 발생시키는 함수, reducer: 위에 선언되어 있는 reducer 함수, {value:0} : 해당 리듀서의 기본값
    // useReducer를 사용했을 때 장점: 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;