import React from 'react'
import Home from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom'
import Header from './component/header/header'
import OrdersList from './pages/orders/order'
import TrackingOrder from './pages/trackingorder/trackingorder'
import Profile from './pages/profile/profile'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/order' component={OrdersList} />
           <Route path='/ordertracking' component={TrackingOrder} />
           <Route path='/profile'  component={Profile}   />
        </Switch>
       
    </div>
  );
}

export default App;
