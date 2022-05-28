import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의 : 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성한다.
const INCREASE = 'Counter/INCREASE';
const DECREASE = 'Counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.number - 1}),
    },
    initialState,
);

export default counter;