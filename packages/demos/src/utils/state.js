const $state = Symbol('state');

class AppState {
  constructor(state = {}) {
    this[$state] = state;
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  getState() {
    return this[$state];
  }

  getKey(key = null) {
    return key ? this[$state][key].data : this[$state];
  }

  keyExists(key) {
    return key in this[$state];
  }

  mergeWithState(stateChange) {
    if (stateChange.toString() !== '[object Object]')
      throw new TypeError('Setting appState requires an object literal as an argument.');
    const addCacheDate = Object.keys(stateChange).reduce((a, b) => {
      return {
        ...a,
        [b]: {
          cacheDate: new Date(),
          data: stateChange[b],
        },
      };
    }, {});

    this[$state] = {
      ...this[$state],
      ...addCacheDate,
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
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  checkStale(key, cacheTime) {
    return cacheTime > 0 ? new Date() - this[$state][key].cacheDate > cacheTime : false;
  }

  useCache(key, cacheTime) {
    if (this.keyExists(key) && !this.checkStale(key, cacheTime)) {
      return this.getKey(key);
    }
    return undefined;
  }
}

export default AppState;
