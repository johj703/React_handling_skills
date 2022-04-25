const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    // key = 컴포넌트 배열을 렌더링했을 때, 어떤 원소에 변동이 있었는지 알아내려고 사용하는 것이다.
    const namesList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{namesList}</ul>;
};

export default IterationSample;