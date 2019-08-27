import React, { useReducer } from 'react';

import { food } from './menu.json'
import { restaurantReducer } from './reducers';
import { RestaurantState } from './types';
import Filter from './components/Filters';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import FoodList from './components/FoodList';
import Bag from './components/Bag';

// LocalStorage ...
localStorage.setItem('foods', JSON.stringify(food));

const items = JSON.parse(localStorage.getItem('bag') || '[]');
const style = localStorage.getItem('style') || 'all';
const filter = localStorage.getItem('filter') || '';

const initialState: RestaurantState = {
  filter: filter,
  style: style,
  items: items,
  foods: food
}

localStorage.setItem('state', JSON.stringify(initialState));

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(restaurantReducer, initialState, composeEnhancers());

const App: React.FC = () => {

  return (
    <>
      <Provider store={store}>
        <header className="navbar navbar-expand" style={HeaderStyle}>
          <Filter></Filter>
        </header>
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6">
              <FoodList />
            </div>
            <div className="col-md-6">
              <Bag />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

const HeaderStyle = {
  backgroundColor: '#ea1d2c',

};



export default App;
