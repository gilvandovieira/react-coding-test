import { Food, RestauranteActionTypes, ADD_FOOD, CHANGE_CUSINE_STYLE, FILTER_FOOD, BagItem, REMOVE_FOOD, PROCEED_TO_CHECKOUT } from "../types";

export function addFood(food: Food): RestauranteActionTypes {
    return {
        type: ADD_FOOD,
        payload: food
    }
}

// export function changeCusineStyle(cusineStyle: string): RestauranteActionTypes {
//     return {
//         type: CHANGE_CUSINE_STYLE,
//         payload: cusineStyle
//     }
// }

export function changeCusineStyleToAll(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'all'
    }
}

export function changeCusineStyleToBeverages(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'beverage'
    }
}

export function changeCusineStyleToBurgers(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'burgers'
    }
}

export function changeCusineStyleToChinese(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'chinese'
    }
}

export function changeCusineStyleToPizza(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'pizza'
    }
}

export function changeCusineStyleToSalad(): RestauranteActionTypes {
    return {
        type: CHANGE_CUSINE_STYLE,
        payload: 'salad'
    }
}

export function filterFood(foodTitle: string): RestauranteActionTypes {
    return {
        type: FILTER_FOOD,
        payload: foodTitle
    }
}

export function removeFood(item: BagItem): RestauranteActionTypes {
    return {
        type: REMOVE_FOOD,
        payload: item
    }
}

export function proceedToCheckout(): RestauranteActionTypes {
    return {
        type: PROCEED_TO_CHECKOUT
    }
}