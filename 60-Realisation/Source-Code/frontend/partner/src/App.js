import './App.css'
import LoginForm from './components/pages/LoginForm'
import RegisterForm from './components/pages/RegisterForm'
import Home from './components/pages/Home'
import PersonalDetail from './components/pages/PersonalDetail'
import PasswordCheck from './components/pages/PasswordCheck'
import Services from './components/pages/Services';
import Products from './components/pages/Products'
import RegistrationDetail from './components/pages/RegistrationDetail'
//import PropertyFacilities from './components/pages/PropertyFacilities'
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
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/registrationDetail' component={RegistrationDetail}/>
        </Switch>
      </Router>
      {/* <PropertyFacilities/> */}
    </>
  );
}

export default App;
