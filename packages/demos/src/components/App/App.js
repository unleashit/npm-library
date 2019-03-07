import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navigation from "./Navigation";
import Pagination from "../pagination";
import Login from '../login';
import ApiService from "../../utils/api";
import "./App.scss";

const store = new ApiService();
export const Context = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange() {
    this.setState(store.getState());
  };

  componentDidMount() {
    this.subscriptionId = store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.subscriptionId);
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        store
      }}>
        <Router>
          <div className="app-container">
            <Navigation />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/pagination"} exact component={Pagination} />
              <Route path={"/login"} exact component={Login} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;

export const StateConsumer = Context.Consumer;
