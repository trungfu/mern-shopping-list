import React from 'react';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from "./actions/authActions";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
    );
  }
}

export default App;
