import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import AccountsContainer from './AccountsContainer';
import CreditContainer from './CreditContainer';
import DebitContainer from './DebitContainer';
import AccountContainer from './AccountContainer';
import About from '../components/About';
import Footer from './Footer';
import Login from './Login';
import '../css/App.css';
import '../css/Forms.css';
import '../css/Accounts.css';
import '../css/Footer.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="content-wrap">
      <Router>
        <NavBar />
	      <Route exact path="/"
          component={AccountsContainer}
         />
         <Route exact path="/debit"
            component={DebitContainer}
         />
         <Route exact path="/credit"
           component={CreditContainer}
          />
          <Route exact path="/accounts/:id"
            component={AccountContainer}
          />
          <Route exact path="/about"
            component={About}
          />
          <Footer />
    </Router>
    </div>
    </div>
    );
  };
}

export default App;
