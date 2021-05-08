import React from 'react'
import Home from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom'
import Header from './component/header/header'
import OrdersList from './pages/orders/order'
import TrackingOrder from './pages/trackingorder/trackingorder'
import Profile from './pages/profile/profile'
import SignUpSignIn from './pages/signup/signup'
import CategoryChild from './component/category/category-child'
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
           <Route path='/signup'  component={SignUpSignIn}   />
           <Route path='/startorder' component={CategoryChild} />
        </Switch>
       
    </div>
  );
}

export default App;
