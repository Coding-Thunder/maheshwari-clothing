import './App.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shoppage/shop.component'
import Homepage from "./pages/homepage/homepage.component"
 
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// firebase imports
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact  path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
