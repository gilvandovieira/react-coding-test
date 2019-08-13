import React from 'react';
import { Food, RestauranteActionTypes } from '../types';

interface Props {
    food: Food
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const FoodElement: React.FC<Props> = ({ food, dispatch }) => {

    return (
        <div className="align-items-end clearfix" style={FoodElementStyle}>
            <p className="h3">{food.title}<br></br>
                <small className="bg-light text-muted">US$ {food.price.toFixed(2)}</small></p>
            <div className="badge text-wrap badge-danger">{food.cuisine}</div>
            <div>
                <button className="btn btn-success" style={AddFoodButton} onClick={
                    (ev) => {
                        ev.preventDefault();
                        dispatch({ type: 'ADD_FOOD', payload: food });
                    }
                }>+</button>
            </div>
        </div>
    )
}


const FoodElementStyle = {
    minWidth: '350px'
}

const AddFoodButton = {
    display: 'inline-block'
}

export default FoodElement