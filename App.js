import React, { Component } from 'react';
import { AppState, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
import { Spinner } from './src/components/common/Spinner';

const middleware = applyMiddleware(ReduxThunk, createLogger());

const store = createStore(reducers, middleware);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStoreLoading: false,
      store,
    };
  }

  componentWillMount() {
    const self = this;
    AppState.addEventListener('change', this.handleAppStateChange);
    this.setState({ isStoreLoading: true });
    AsyncStorage.getItem('completeStore')
      .then((value) => {
        if (value && value.length) {
          const initialStore = JSON.parse(value);
          self.setState({
            store: createStore(reducers, initialStore, middleware),
          });
        } else {
          self.setState({ store });
        }
        self.setState({ isStoreLoading: false });
      })
      .catch(() => {
        self.setState({ store });
        self.setState({ isStoreLoading: false });
      });
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  handleAppStateChange = () => {
    const storingValue = JSON.stringify(this.state.store.getState());
    AsyncStorage.setItem('completeStore', storingValue);
  };

  render() {
    if (this.state.isStoreLoading) {
      return <Spinner size="large" />;
    } else if (!this.state.isStoreLoading) {
      return (
        <Provider store={this.state.store}>
          <Router />
        </Provider>
      );
    }
  }
}

export default App;
