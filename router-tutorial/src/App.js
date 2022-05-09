import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
<<<<<<< HEAD
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
=======
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/About" component={About} />
>>>>>>> parent of 56a261c0 (리액트 라우터로 SPA 개발하기 - Routo 하나에 여러 개의 path 설정하기)
    </div>
  );
};

export default App;