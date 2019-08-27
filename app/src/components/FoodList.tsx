import React from 'react';
import { Food, RestaurantState } from '../types';
import { connect } from 'react-redux';
import { addFood } from '../actions';

interface Props {
    foods: Food[]
    addFood: (f: Food) => void
}

const FoodList: React.FC<Props> = ({ foods, addFood }) => {

    return (<>
        {foods.map(food =>
            <div className="border" style={FoodCard} key={food.id}>
                <div style={FoodElementStyle}>
                    <p className="h3">{food.title}<br></br>
                        <small className="bg-light text-muted">US$ {food.price.toFixed(2)}</small></p>
                    <div className="badge text-wrap badge-danger">{food.cuisine}</div>
                    <div>
                        <button className="btn btn-success" onClick={(ev) => {
                            ev.preventDefault();
                            addFood(food);
                        }}>+</button>
                    </div>
                </div>
            </div>)}
    </>)
}

const FoodCard = {
    marginTop: '30px',
    padding: '15px',
    width: 'inherit'
}
const FoodElementStyle = {
    width: 'inherit'
}

const mapStateToProps = (state: RestaurantState) => ({
    foods: state.foods
});

const dispatchToProps = {
    addFood: addFood
}
export default connect(mapStateToProps, dispatchToProps)(FoodList)