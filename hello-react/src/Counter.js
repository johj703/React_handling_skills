import { Component } from 'react';

class Counter extends Component {
    // 컴포넌트에 state를 설정할 때는 constructor 메서드를 작성해서 설정!
    // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출해 준다.
    constructor(props) {
        super(props);
        // state의 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render(){
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다!
                    // 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어 주어야 한다.
                    onClick={() => {
                        // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                        this.setState({ number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;