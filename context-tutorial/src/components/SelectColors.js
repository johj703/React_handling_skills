import { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    // static contextType를 해주면 this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.
    // 만약 setColor를 호출하고 싶다면 this.context.actions.setColor을 호출하면 된다.
    static contextType = ColorContext;
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
                        />
                    ))} 
                </div>
                <hr />
            </div>
        );
    };
};

export default SelectColors;