import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Navigation from './Navigation';
import Pagination from '../pagination';
import Login from '../login';
import Signup from '../signup';
import ForgotPassword from '../forgotPassword';
import AsyncHandler from '../asyncHandler';
import RecursiveDataLister from '../recursiveDataLister';
import ApiService from '../../utils/api';
import { AppContext } from '../../utils/context';
import './App.scss';

const store = new ApiService();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

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
                <Route path={'/'} exact component={Home} />
                <Route path={'/pagination'} exact component={Pagination} />
                <Route path={'/login'} exact component={Login} />
                <Route path={'/signup'} exact component={Signup} />
                <Route path={'/forgot-password'} exact component={ForgotPassword} />
                <Route path={'/async-handler'} exact component={AsyncHandler} />
                <Route
                  path={'/recursive-data-lister'}
                  exact
                  component={RecursiveDataLister}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
