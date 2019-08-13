import React from 'react';
import FoodList from './FoodList';
import Bag from './Bag';
import { Food, RestauranteActionTypes, BagItem } from '../types';

interface Props {
    foods: Food[]
    bag: BagItem[]
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const RestaurantBody: React.FC<Props> = ({ foods, bag, dispatch }) => {
    return (

        <div className="container clearfix" style={BodyStyle}>
            <div className="row">
                <div className="col-md-6">
                    <FoodList foods={foods} dispatch={dispatch}/>
                </div>
                <div className="col-md-6">
                    <Bag bag={bag} dispatch={dispatch}></Bag>
                </div>
            </div>
        </div>

    )
}

const BodyStyle = {
    //paddingTop: '100px'
}

export default RestaurantBody