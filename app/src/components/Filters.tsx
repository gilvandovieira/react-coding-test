import React from 'react';
import { RestauranteActionTypes } from '../types';

interface Props {
    dispatch: React.Dispatch<RestauranteActionTypes>
}

const Filter: React.FC<Props> = ({ dispatch }) => {

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
        dispatch({
            type: 'FILTER_FOOD',
            payload: e.target.value || ''
        })
    }

    function onAllClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'all'
        })
    }

    function onBeveragesClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'beverage'
        })
    }


    function onBurgersClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'burgers'
        })
    }

    function onChineseClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'chinese'
        })
    }

    function onPizzaClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'pizza'
        })
    }

    function onSaladClick(e: React.MouseEvent) {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_CUSINE_STYLE',
            payload: 'salad'
        })
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