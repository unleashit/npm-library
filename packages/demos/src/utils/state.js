class AppState {
  constructor(state = {}) {
    this._state = state;
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  // setState(state) {
  //   if (state.toString() !== "[object Object]")
  //     throw new TypeError("Setting appState requires an object literal as an argument.");
  //
  //   Object.keys(state).forEach(key => {
  //     this._state[key] = state[key];
  //   });
  //
  //   return this._state;
  // }

  getState() {
    return this._state;
  }

  getKey(key = null) {
    return key ? this._state[key] : this._state;
  }

  keyExists(key) {
    return key in this._state;
  }

  mergeWithState(stateChange) {
    if (stateChange.toString() !== '[object Object]')
      throw new TypeError('Setting appState requires an object literal as an argument.');

    this._state = {
      ...this._state,
      ...stateChange,
    };
    this.notifySubscribers();
  }

  subscribe(cb) {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(subscriptionId) {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers() {
    Object.values(this.subscriptions).forEach(cb => cb());
  }
}

export default AppState;
