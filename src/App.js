import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';

// pages
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// data
// provider is same as context.api
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      // need to wrap the app inside the provider
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <p className="lead">React w/Redux</p>
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
