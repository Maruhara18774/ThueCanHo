import './App.css'
import LoginForm from './components/pages/LoginForm'
import RegisterForm from './components/pages/RegisterForm'
import Home from './components/pages/Home'
import PersonalDetail from './components/pages/PersonalDetail'
import PasswordCheck from './components/pages/PasswordCheck'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={LoginForm} />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/personal-detail' component={PersonalDetail} />
          <Route path='/password-check' component={PasswordCheck} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
