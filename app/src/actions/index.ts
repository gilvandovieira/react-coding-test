import { Food, RestauranteActionTypes, ADD_FOOD, CHANGE_CUSINE_STYLE, FILTER_FOOD } from "../types";

export function addFood(food: Food): RestauranteActionTypes {
    return {
        type : ADD_FOOD,
        payload: food
    }
}

export function changeCusineStyle(cusineStyle: string): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: cusineStyle
    }
}

export function filterFood(foodTitle: string): RestauranteActionTypes {
    return {
        type: FILTER_FOOD,
        payload: foodTitle
    }
}