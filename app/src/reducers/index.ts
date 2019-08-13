
import { ADD_FOOD, FILTER_FOOD, RestauranteActionTypes, RestaurantState, CHANGE_CUSINE_STYLE, REMOVE_FOOD, BagItem, PROCEED_TO_CHECKOUT } from "../types";
import startsWith from 'lodash/startsWith';

export const restaurantReducer = (state: RestaurantState, action: RestauranteActionTypes): RestaurantState => {
    let Item: BagItem[];
    let Rest: BagItem[];
    let Total: BagItem[];
    switch (action.type) {

        case ADD_FOOD:
            Item = state.bag.items.filter(bagItem => bagItem.id === action.payload.id);
            Rest = state.bag.items.filter(bagItem => !(bagItem.id === action.payload.id));
            if (Item[0] === undefined || Item[0] === null) {
                state.bag.items = [...Rest, {
                    id: action.payload.id,
                    title: action.payload.title,
                    cusine: action.payload.cuisine,
                    priceUnit: action.payload.price,
                    count: 0,
                    total: 0
                }]
            }
            Item = state.bag.items.filter(bagItem => bagItem.id === action.payload.id);
            Item[0].count++;
            Item[0].total = Item[0].count * Item[0].priceUnit;
            Total = [...Rest, Item[0]];
            syncWithLocalStorage(Total);
            return {
                ...state,
                bag: {
                    items: Total
                }
            }

        case REMOVE_FOOD:
            Item = state.bag.items.filter(bagItem => bagItem.id === action.payload.id);
            Rest = state.bag.items.filter(bagItem => !(bagItem.id === action.payload.id));
            if (Item[0] !== undefined) {
                if (Item[0].count === 0 || Item[0].count === 1) {
                    Total = [...Rest];
                } else {

                    Item[0].count--;
                    Item[0].total = Item[0].count * Item[0].priceUnit;
                    Total = [...Rest, Item[0]]
                }

                syncWithLocalStorage(Total);
                return {
                    ...state,
                    bag: {
                        items: Total
                    }
                }
            } else return { ...state }

        case FILTER_FOOD:
            state.foods = returnDefaultState(state).foods;

            return {
                ...state,
                foods: state.foods.filter(food => startsWith(food.title, action.payload))
            }

        case CHANGE_CUSINE_STYLE:
            state.foods = returnDefaultState(state).foods;

            return {
                ...state,
                foods: state.foods.filter(food => food.cuisine === action.payload || action.payload === 'all')
            }
        case PROCEED_TO_CHECKOUT:
            if (state.bag.items.length > 0) {
                state.bag.items = [];
                syncWithLocalStorage([]);
            }
            return { ...state }
        default:
            return state;
    }
}

function returnDefaultState(state: RestaurantState): RestaurantState {
    if (state.filter === '')
        state.foods = JSON.parse(localStorage.getItem('foods') || '');
    if (state.style === 'all')
        state.foods = JSON.parse(localStorage.getItem('foods') || '');
    return state;
}

function syncWithLocalStorage(items: BagItem[]) {
    localStorage.setItem('bag', JSON.stringify(items));
}