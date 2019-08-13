import React from 'react';
import Filter from './Filters';
import { RestauranteActionTypes } from '../types';

interface Props {
    dispatch: React.Dispatch<RestauranteActionTypes>
}


const RestaurantHeader: React.FC<Props> = ({ dispatch}) => {
    return (
        <header className="navbar navbar-expand" style={HeaderStyle}>
            <Filter dispatch={dispatch}></Filter>
        </header>
    )
}

const HeaderStyle = {
    backgroundColor: '#ea1d2c',
    
};

export default RestaurantHeader