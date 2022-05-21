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

// 이 프로젝트에서 사용할 초기값을 정의한다. 초기값의 형태는 자유(숫자, 문자열, 객체 모두 가능)
const initialState = {
    toggle: false,
    counter: 0
};