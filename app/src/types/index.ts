import { Action } from "redux";

export const ADD_FOOD = 'ADD_FOOD';

export const CHANGE_CUSINE_STYLE = 'CHANGE_CUSINE_STYLE';

export const FILTER_FOOD = 'FILTER_FOOD';

export const REMOVE_FOOD = 'REMOVE_FOOD';

export const PROCEED_TO_CHECKOUT = 'PROCEED_TO_CHECKOUT';

export interface Food {
    id: string
    title: string
    cuisine: string
    price: number
}
export interface BagItem {
    id: string
    title: string
    cusine: string
    priceUnit: number
    count: number
    total: number
}

export interface RestaurantState {
    filter: string
    style: string
    foods: Food[]
    items: BagItem[]
}

interface AddFoodAction extends Action{
    type: typeof ADD_FOOD
    payload: Food
}

interface ChangeCusineStyleAction extends Action{
    type: typeof CHANGE_CUSINE_STYLE
    payload: string
}

interface FilterFoodAction extends Action{
    type: typeof FILTER_FOOD
    payload: string
}

interface RemoveFoodAction extends Action{
    type: typeof REMOVE_FOOD
    payload: BagItem
}

interface ProceedToCheckOutAction extends Action{
    type: typeof PROCEED_TO_CHECKOUT
}
export type RestauranteActionTypes = AddFoodAction | ChangeCusineStyleAction | FilterFoodAction | RemoveFoodAction | ProceedToCheckOutAction