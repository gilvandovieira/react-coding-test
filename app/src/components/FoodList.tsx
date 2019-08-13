import React from 'react';
import { Food, RestauranteActionTypes } from '../types';
import FoodElement from './Food';

interface Props {
    foods: Food[]
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const FoodList: React.FC<Props> = ({ foods, dispatch }) => {

    return (<>
        {foods.map(food =>
            <div className="border" style={FoodCard} key={food.id}>
                <FoodElement food={food} dispatch={dispatch}  />
            </div>)}
    </>)
}

const FoodCard = {
    margin: '30px',
    padding: '15px',
    width: 'inherit'
}

export default FoodList