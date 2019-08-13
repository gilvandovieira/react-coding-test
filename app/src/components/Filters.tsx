import React from 'react';
import { RestauranteActionTypes } from '../types';
import { filterFood, changeCusineStyleToAll, changeCusineStyleToBeverages, changeCusineStyleToBurgers, changeCusineStyleToChinese, changeCusineStyleToPizza, changeCusineStyleToSalad } from '../actions';

interface Props {
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const Filter: React.FC<Props> = ({ dispatch }) => {

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
        dispatch(filterFood(e.target.value));
    }

    function onAllClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToAll());
    }

    function onBeveragesClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToBeverages());
    }


    function onBurgersClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToBurgers());
    }

    function onChineseClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToChinese());
    }

    function onPizzaClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToPizza());
    }

    function onSaladClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch(changeCusineStyleToSalad());
    }
    return (
        <div style={FiltersStyle}>
            <div className="d-flex justify-content-center">
                <input className="input" type="text" onChange={onInputChange} style={InputStyle}></input>
            </div>
            <div className="d-flex justify-content-center m-6">
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={onAllClick}>All</button>
                    <button className="btn btn-primary" onClick={onBeveragesClick}>Beverages</button>
                    <button className="btn btn-primary" onClick={onBurgersClick}>Burgers</button>
                    <button className="btn btn-primary" onClick={onChineseClick}>Chinese</button>
                    <button className="btn btn-primary" onClick={onPizzaClick}>Pizza</button>
                    <button className="btn btn-primary" onClick={onSaladClick}>Salad</button>
                </div>
            </div>
        </div>
    )
}

const FiltersStyle = {
    width: '100vw'
}

const InputStyle = {
    width: '20vw',
    margin: '30px',
    padding: '15px',
    minWidth: '300px'
}
export default Filter