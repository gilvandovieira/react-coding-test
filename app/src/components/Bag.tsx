import React from 'react';
import { BagItem, RestauranteActionTypes } from '../types';
import _ from 'lodash';
import { removeFood, proceedToCheckout } from '../actions';

interface Props {
    bag: BagItem[]
    dispatch: React.Dispatch<RestauranteActionTypes>
}
const Bag: React.FC<Props> = ({ bag, dispatch }) => {
    function onRemoveAFoodItem(item: BagItem) {
        dispatch(removeFood(item))
    }
    bag = _.sortBy(bag, [function (o) { return o.id; }]);
    return (<div className="d-flex-inline border clearfix bg-light" style={BagStyle}>
        <h3>Your Bag({bag.length})</h3>
        {bag.map(item =>
            <div key={item.id}>
                <p className="h4">{item.title}</p>
                <p className="h5">x{item.count} <small>${item.total.toFixed(2)} </small>
                    <button className="btn btn-danger" onClick={(ev) => {
                        ev.preventDefault();
                        onRemoveAFoodItem(item);
                    }}>-</button></p>
            </div>
        )}
        <div>
            <h3>Total: ${_.reduce(bag, (left, right) => left + right.total, 0).toFixed(2)}</h3>
        </div>
        <div style={ProceedToCheckout}>
            <button className="btn btn-secondary" style={ProceedToCheckout} onClick={(ev) => {
                ev.preventDefault();
                dispatch(proceedToCheckout())
            }}>Proceed to checkout</button>
        </div>
    </div>)
}


const BagStyle = {
    marginTop: '30px',
    padding: '15px',
    width: 'inherit',
    minWidth: 'fit-content'
}

const ProceedToCheckout = {
    width: 'inherit'
}

export default Bag