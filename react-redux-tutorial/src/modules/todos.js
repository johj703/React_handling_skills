const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경한다.
const INSERT = 'todos/INSERT'; // 새로운 todos를 등록한다.
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제한다.
const REMOVE = 'todos/REMOVE'; // todo를 제거한다.

export const changeInput = input = ({
    type: CHANGE_INPUT,
    input
});

let id = 3; // insert가 호출될 때마다 1씩 더해진다.
export const insert = text = ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id = ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});