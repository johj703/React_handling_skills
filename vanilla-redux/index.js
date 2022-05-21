import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 한다.
// 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 객체는 type 값을 반드시 갖고 있어야 하며, 그 외에 추후 상태를 업데이트할 때 참고하고 싶은 값은 마음대로 넣을 수 있다.
const toggle_switch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 이 프로젝트에서 사용할 초기값을 정의한다. 초기값의 형태는 자유(숫자, 문자열, 객체 모두 가능)다.
const initialState = {
    toggle: false,
    counter: 0
};

// 리듀서는 변화를 일으키는 함수다. 함수의 파라미터로는 state와 action 값을 받아 온다.
// state가 undefined일 때는, initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리한다.
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                // spread 연산자(...)를 사용하여 불변성 유지를 해 줘야 한다.
                // 단 객체의 구조가 복잡해지면(예를 들어 object.something.inside.value) spread 연산자로 불변성을 관리하며 업데이트 하는 것이
                // 굉장히 번거로울 수 있고 코드의 가독성도 나빠지기 때문에 리덕스의 상태는 최대한 깊지 않은 구조로 진행하는 것이 좋다.
                // 객체의 구조가 복잡해지거나 배열도 함께 다루는 경우 immer 라이브라리를 사용하면 좀 더 쉽게 리듀서를 작성할 수 있다.
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                toggle: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                toggle: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러온다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();