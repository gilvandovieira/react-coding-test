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
            <div className="border" style={FoodCard}>
                <FoodElement food={food} dispatch={dispatch} key={food.id} />
            </div>)}
    </>)
}

const FoodCard = {
    margin: '30px',
    padding: '15px',
    width: 'inherit'
}

export default FoodList