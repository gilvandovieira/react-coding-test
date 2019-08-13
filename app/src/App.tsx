import React, { useReducer } from 'react';

import RestaurantHeader from './components/RestaurantHeader';
import RestaurantBody from './components/RestaurantBody';

import { food } from './menu.json'
import { restaurantReducer } from './reducers';
import { RestaurantState } from './types';


const initialState: RestaurantState = {
  filter: '',
  style: 'all',
  bag: {
    items: []
  },
  foods: food
}

localStorage.setItem('foods', JSON.stringify(food));

const App: React.FC = () => {

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  
  return (
    <>
      <RestaurantHeader dispatch={dispatch} />
      <RestaurantBody foods={state.foods} bag={state.bag.items} dispatch={dispatch} />
    </>
  );
}




export default App;
