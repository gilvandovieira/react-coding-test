import React from 'react';
import { Food, RestauranteActionTypes } from '../types';
import { addFood } from '../actions';

interface Props {
    food: Food
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const FoodElement: React.FC<Props> = ({ food, dispatch }) => {

    return (
        <div style={FoodElementStyle}>
            <p className="h3">{food.title}<br></br>
                <small className="bg-light text-muted">US$ {food.price.toFixed(2)}</small></p>
            <div className="badge text-wrap badge-danger">{food.cuisine}</div>
            <div>
                <button className="btn btn-success" onClick={(ev) => {
                    ev.preventDefault();
                    dispatch(addFood(food));
                }}>+</button>
            </div>
        </div>
    )
}


const FoodElementStyle = {
   width:'inherit'
}


export default FoodElement