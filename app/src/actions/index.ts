import { action } from 'typesafe-actions';

import { Food, RestauranteActionTypes, ADD_FOOD, CHANGE_CUSINE_STYLE, FILTER_FOOD, BagItem, REMOVE_FOOD, PROCEED_TO_CHECKOUT } from "../types";

export const addFood = (food: Food) => action(ADD_FOOD, food)


// export function addFood(food: Food): RestauranteActionTypes {
//     return {
//         type: ADD_FOOD,
//         payload: food
//     }
// }

export const changeCuisineStyle = (cuisineStyle: string) => action(CHANGE_CUSINE_STYLE, cuisineStyle);
// export function changeCusineStyle(cusineStyle: string): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: cusineStyle
//     }
// }

// export function changeCusineStyleToAll(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'all'
//     }
// }

// export function changeCusineStyleToBeverages(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'beverage'
//     }
// }

// export function changeCusineStyleToBurgers(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'burgers'
//     }
// }

// export function changeCusineStyleToChinese(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'chinese'
//     }
// }

// export function changeCusineStyleToPizza(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'pizza'
//     }
// }

// export function changeCusineStyleToSalad(): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: 'salad'
//     }
// }

export const filterFood = (foodTitle: string) => action(FILTER_FOOD, foodTitle);
// export function filterFood(foodTitle: string): RestauranteActionTypes {
//     return {
//         type: FILTER_FOOD,
//         payload: foodTitle
//     }
// }

export const removeFood = (item: BagItem) => action(REMOVE_FOOD, item);
// export function removeFood(item: BagItem): RestauranteActionTypes {
//     return {
//         type: REMOVE_FOOD,
//         payload: item
//     }
// }

export const proceedToCheckout = () => action(PROCEED_TO_CHECKOUT)
// export function proceedToCheckout(): RestauranteActionTypes {
//     return {
//         type: PROCEED_TO_CHECKOUT
//     }
// }