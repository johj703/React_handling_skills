import { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요."
                    value={this.state.message}
                    onChange={
                        // e 객체는 console에서 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체다.
                        // 네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 된다!
                        // onChange 이벤트가 발생할 때, console.log에 e.target.value를 입력하면 값이 바뀔 때마다 콘솔에 기록하게 된다!
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;