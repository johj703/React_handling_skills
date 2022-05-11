import { Component } from 'react';

// history 객체 = 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props 중 하나로,
// 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있다.
class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push();
    };

    componentDidMount() {
        // 이것을 실행하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문한다.
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    };

    componentWillUnmount() {
        // 컴포넌트가 언마운트되면 질문을 멈춤
        if(this.unblock){
            this.unblock();
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;