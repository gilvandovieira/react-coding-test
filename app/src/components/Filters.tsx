import React from 'react';
import { RestaurantState } from '../types';
import { filterFood, changeCuisineStyle } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDragon, faHamburger, faPizzaSlice, faCarrot, faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

interface Props {
    style: string
    filter: string
    filterFood: (s: string) => void
    changeCuisineStyle: (s: string) => void
}

const Filters: React.FC<Props> = ({ style, filter, filterFood, changeCuisineStyle }) => {

    // const dispatch = useDispatch<React.Dispatch<RestauranteActionTypes>>();

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        filterFood(e.target.value);
    }

    function onChangeCuisine(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const { value } = e.target;
        changeCuisineStyle(value);
    }
    return (
        <div style={FilterStyle}>
            <div className="d-flex justify-content-center">
                <input className="input" type="text" placeholder="Search" onChange={onInputChange} style={InputStyle} value={filter}></input>
            </div>
            <div className="d-flex justify-content-center m-6">

                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="all" id="cuisine-all" onChange={onChangeCuisine} checked={style === 'all'} />
                    <label htmlFor="cuisine-all">
                        <span className="d-sm-inline d-none">All</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faBars} /></span>
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="beverage" id="cuisine-beverages" onChange={onChangeCuisine} checked={style === 'beverage'} />
                    <label htmlFor="cuisine-beverages">
                        <span className="d-sm-inline d-none">Beverages</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faCoffee} /></span>
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="burgers" id="cuisine-burgers" onChange={onChangeCuisine} checked={style === 'burgers'} />
                    <label htmlFor="cuisine-burgers">
                        <span className="d-sm-inline d-none">Burgers</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faHamburger} /></span>
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="chinese" id="cuisine-chinese" onChange={onChangeCuisine} checked={style === 'chinese'} />
                    <label htmlFor="cuisine-chinese">
                        <span className="d-sm-inline d-none">Chinese</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faDragon} /></span>
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="pizza" id="cuisine-pizza" onChange={onChangeCuisine} checked={style === 'pizza'} />
                    <label htmlFor="cuisine-pizza">
                        <span className="d-sm-inline d-none">Pizza</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faPizzaSlice} /></span>
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="cuisine" value="salad" id="cuisine-salad" onChange={onChangeCuisine} checked={style === 'salad'} />
                    <label htmlFor="cuisine-salad">
                        <span className="d-sm-inline d-none">Salad</span>
                        <span className="d-sm-none d-block"><FontAwesomeIcon icon={faCarrot} /></span>
                    </label>
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

const mapStateToProps = (state: RestaurantState) => ({
    style: state.style,
    filter: state.filter
});

const dispatchToProps = {
    filterFood: filterFood,
    changeCuisineStyle: changeCuisineStyle
}


export default connect(mapStateToProps, dispatchToProps)(Filters)