import './App.css';
import ReactDOM from 'react-dom'
import Navbar from './Components/nav-bar'
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';
import Login from './Pages/login.js';
import ListApartment from './Pages/show-apartment';
import HomePage from './Pages/home'
import PromotionPage from './Pages/promotion'
import DetailApartment from './Pages/detail-apartment';
import BookingForm from './Pages/booking-infor';
import RegisterForm from './Pages/register';
import CustomerInfoPage from './Pages/customer-info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="fixed-top">
            <Navbar/>
        </div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/apaLst" component={ListApartment}></Route>
          <Route path="/promotion" component={PromotionPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/listApartments/:apartmentId" exact component={DetailApartment}></Route>
          <Route path="/booking/:apartmentId" exact component={BookingForm}></Route>
          <Route path="/customerInfor/:accountID" exact component={CustomerInfoPage} ></Route>
        </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;

/*

      
*/
