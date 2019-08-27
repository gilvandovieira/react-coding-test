
import { ADD_FOOD, FILTER_FOOD, RestauranteActionTypes, RestaurantState, CHANGE_CUSINE_STYLE, REMOVE_FOOD, BagItem, PROCEED_TO_CHECKOUT, Food } from "../types";
import startsWith from 'lodash/startsWith';

const emptyState = JSON.parse(localStorage.getItem('state') || '{}')

export const restaurantReducer = (s: RestaurantState = emptyState, action: RestauranteActionTypes) => {
    let Item: BagItem[];
    let Rest: BagItem[];
    let Total: BagItem[];
    switch (action.type) {

        case ADD_FOOD:
            Item = s.items.filter(bagItem => bagItem.id === action.payload.id);
            Rest = s.items.filter(bagItem => !(bagItem.id === action.payload.id));
            if (Item[0] === undefined || Item[0] === null) {
                s.items = [...Rest, {
                    id: action.payload.id,
                    title: action.payload.title,
                    cusine: action.payload.cuisine,
                    priceUnit: action.payload.price,
                    count: 0,
                    total: 0
                }]
            }
            Item = s.items.filter(bagItem => bagItem.id === action.payload.id);
            Item[0].count++;
            Item[0].total = Item[0].count * Item[0].priceUnit;
            Total = [...Rest, Item[0]];
            syncWithLocalStorage(Total);
            return {
                ...s,
                items: Object.assign(Total)
            }

        case REMOVE_FOOD:
            Item = s.items.filter(bagItem => bagItem.id === action.payload.id);
            Rest = s.items.filter(bagItem => !(bagItem.id === action.payload.id));
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
                    ...s,
                    items: Object.assign(Total)
                }
            } else return { ...s }

        case FILTER_FOOD:
            return {
                ...s,
                filter: action.payload,
                foods: JSON.parse(localStorage.getItem('foods') || '[]').filter((food: Food) => startsWith(food.title, action.payload))
            }

        case CHANGE_CUSINE_STYLE:
            return {
                ...s,
                style: action.payload,
                foods: JSON.parse(localStorage.getItem('foods') || '[]').filter((food: Food) => (action.payload === 'all' || food.cuisine === action.payload))
            }
        case PROCEED_TO_CHECKOUT:
            if (s.items.length > 0) {
                s.items = [];
                syncWithLocalStorage([]);
            }
            return { ...s }
        default:
            return s;
    }
}

function syncWithLocalStorage(items: BagItem[]) {
    localStorage.setItem('bag', JSON.stringify(items));
}