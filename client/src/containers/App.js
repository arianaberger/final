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
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
    }
  }

  handleLoginFormChange = e => {
    const { name, value } = e.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleLoginFormSubmit = e => {
    e.preventDefault();

    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }

    fetch('http://localhost:3001/login', headers)
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert("Invalid Credentials")
        } else {
          this.setState({
            currentUser: user
          })
        }
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="app-container">
        <div className="content-wrap">
        <Login
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
        />
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
