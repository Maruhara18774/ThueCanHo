import './App.css'
import Login from './Components/login'
import Navbar from './Components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/home'
import Trending from './Pages/trending'
import Account from './Pages/account'

//-------------------------------Login-------------------------
function App() {
  return (
    <div className="bg">
      <Login/>   
    </div>
  );
}


/*
//-------------------------------Navbar-------------------------
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/account' component={Account}/>
          <Route path='/trending' component={Trending}/>
        </Switch>
      </Router>
    </div >
  );
}
*/

export default App;
