import React from 'react'
import Home from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom'
import Header from './component/header/header'
import OrdersList from './pages/orders/order'
import TrackingOrder from './pages/trackingorder/trackingorder'
import Profile from './pages/profile/profile'
import SignUpSignIn from './pages/signup/signup'
import CategoryChild from './component/category/category-child'
import Shop from './component/shop'
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
           <Route path='/shop' component={Shop} />
        </Switch>
       
    </div>
  );
}

export default App;


// import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
// import Category from "./Category";
// import Products from './products'
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );



// export default function App() {
//   return (
//     <div>
//       <nav className="navbar navbar-light">
//         <ul className="nav navbar-nav">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/category">Category</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route exact path="/"><Home /></Route>
//         <Route path="/category"><Category /></Route>
//         <Route path="/products"><Products /></Route>
//       </Switch>
//     </div>
//   );
// }