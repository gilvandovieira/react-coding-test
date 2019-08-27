import React from 'react';
import { BagItem, RestaurantState } from '../types';
import { reduce, sortBy } from 'lodash';
import { removeFood, proceedToCheckout } from '../actions';
import { connect } from 'react-redux';

interface Props {
    bag: BagItem[]
    removeFood: (f: BagItem) => void
    proceedToCheckout: () => void
}
const Bag: React.FC<Props> = ({ bag, removeFood, proceedToCheckout }) => {
    function onRemoveAFoodItem(item: BagItem) {
       removeFood(item)
    }
    bag = sortBy(bag, [function (o) { return o.id; }]);
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
            <h3>Total: ${reduce(bag, (left, right) => left + right.total, 0).toFixed(2)}</h3>
        </div>
        <div style={ProceedToCheckout}>
            <button className="btn btn-secondary" style={ProceedToCheckout} onClick={(ev) => {
                ev.preventDefault();
                proceedToCheckout()
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

const mapStateToProps = (s: RestaurantState) => ({
    bag: s.items
})

const dispatchToProps = {
    removeFood: removeFood,
    proceedToCheckout: proceedToCheckout
}

export default connect(mapStateToProps, dispatchToProps)(Bag)