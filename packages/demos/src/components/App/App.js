import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiService from '../../utils/api';
import { AppContext } from '../../utils/context';
import AsyncHandler from '../asyncHandler';
import ForgotPassword from '../forgotPassword';
import ForgotPasswordReset from '../forgotPasswordReset';
import Home from '../Home/Home';
import Login from '../login';
import MockData from '../mockData';
import ModalDemo from '../modal';
import NavigationDemo from '../navigation';
import Pagination from '../pagination';
import RecursiveDataLister from '../recursiveDataLister';
import Signup from '../signup';
import Navigation from './Navigation';

const store = new ApiService();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onStoreChange = this.onStoreChange.bind(this);
  }

  state = store.getState();

  onStoreChange() {
    this.setState(store.getState());
  }

  componentDidMount() {
    this.subscriptionId = store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.subscriptionId);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          globalState: this.state,
          store,
        }}
      >
        <Router>
          <div className="app-container">
            <Navigation />
            <div className="component-container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pagination" exact component={Pagination} />
                <Route path="/navigation" exact component={NavigationDemo} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
                <Route
                  path="/forgot-password/reset/:userid/:token"
                  exact
                  component={ForgotPasswordReset}
                />
                <Route path="/async-handler" exact component={AsyncHandler} />
                <Route
                  path="/recursive-data-lister"
                  exact
                  component={RecursiveDataLister}
                />
                <Route path="/mock-data" exact component={MockData} />
                <Route path="/modal" exact component={ModalDemo} />
              </Switch>
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
