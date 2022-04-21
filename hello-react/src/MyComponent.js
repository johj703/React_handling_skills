import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};
// 비구조화 할당 = 구조 분해 문법이라고도 불리며, 함수의 파라미터 부분에서도 사용할 수 있다.
// 만약 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것이다.
MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;