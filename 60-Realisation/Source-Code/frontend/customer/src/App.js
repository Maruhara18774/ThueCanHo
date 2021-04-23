import './App.css';
import Navbar from './Components/nav-bar'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Login from './Components/login.js';
import ListApartment from './Components/show-apartment';
import HomePage from './Pages/home'


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/apaLst" component={ListApartment}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
    </Router>
    </div>

  );
}

export default App;
