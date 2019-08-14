import React from 'react';
import { RestauranteActionTypes } from '../types';
import { filterFood, changeCusineStyleToAll, changeCusineStyleToBeverages, changeCusineStyleToBurgers, changeCusineStyleToChinese, changeCusineStyleToPizza, changeCusineStyleToSalad } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDragon, faHamburger, faPizzaSlice, faCarrot, faBars } from '@fortawesome/free-solid-svg-icons';

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
        <div style={FilterStyle}>
            <div className="d-flex justify-content-center">
                <input className="input" type="text" onChange={onInputChange} style={InputStyle}></input>
            </div>
            <div className="d-flex justify-content-center m-6">
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={onAllClick}>
                        <span className="d-sm-inline d-none">All</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faBars} /></span>
                    </button>
                    <button className="btn btn-primary" onClick={onBeveragesClick}>
                        <span className="d-sm-inline d-none">Beverages</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faCoffee} /></span>
                    </button>
                    <button className="btn btn-primary" onClick={onBurgersClick}>
                        <span className="d-sm-inline d-none">Burgers</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faHamburger} /></span>
                    </button>
                    <button className="btn btn-primary" onClick={onChineseClick}>
                        <span className="d-sm-inline d-none">Chinese</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faDragon} /></span>
                    </button>
                    <button className="btn btn-primary" onClick={onPizzaClick}>
                        <span className="d-sm-inline d-none">Pizza</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faPizzaSlice} /></span>
                    </button>
                    <button className="btn btn-primary" onClick={onSaladClick}>
                        <span className="d-sm-inline d-none">Salad</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faCarrot} /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
const FilterStyle = {
    width: '100vw'
}
const InputStyle = {
    width: 'inherit',
    marginTop: '30px',
    marginBottom: '15px',
}
export default Filter