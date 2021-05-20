import './App.css';
import ReactDOM from 'react-dom'
import Navbar from './Components/nav-bar'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Login from './Pages/login.js';
import ListApartment from './Pages/show-apartment';
import HomePage from './Pages/home'
import PromotionPage from './Pages/promotion'

function App() {
  return (
    <div className="App">
      <Router>
        <div class="fixed-top">
          <Navbar/>
        </div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/apaLst" component={ListApartment}></Route>
          <Route path="/promotion" component={PromotionPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;

/*

      
*/
