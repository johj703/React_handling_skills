const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경한다.
const INSERT = 'todos/INSERT'; // 새로운 todos를 등록한다.
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제한다.
const REMOVE = 'todos/REMOVE'; // todo를 제거한다.

export const changeInput = input = ({
    type: CHANGE_INPUT,
    input
});

let id = 3; // insert가 호출될 때마다 1씩 더해진다.
// id 값이 3인 이유는 다음 초기 상태를 작성할 때, todo 객체 두 개를 사전에 미리 넣어 둘 것이기 때문이고,
// 그 다음에 새로 추가될 항목의 id가 3이기 때문이다.
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