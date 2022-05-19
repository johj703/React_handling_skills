import { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    // static contextType를 해주면 this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.
    // 만약 setColor를 호출하고 싶다면 this.context.actions.setColor을 호출하면 된다.
    static contextType = ColorContext;
    // static contextType을 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있다는 장점이 있다.
    // 단점이라면, 한 클래스에서 하나의 Context밖에 사용하지 못한다는 것이다.
    // 하지만 앞으로 새로운 컴포넌트를 작성할 때 클래스형으로 작성하는 일은 많지 않기 때문에 useContext를 사용하는 쪽을 추천한다!
    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))} 
                </div>
                <hr />
            </div>
        );
    };
};

export default SelectColors;