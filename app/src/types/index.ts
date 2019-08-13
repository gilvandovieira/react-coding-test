import { Action } from "redux";

export const ADD_FOOD = 'ADD_FOOD';

export const CHANGE_CUSINE_STYLE = 'CHANGE_CUSINE_STYLE';

export const FILTER_FOOD = 'FILTER_FOOD';

export const REMOVE_FOOD = 'REMOVE_FOOD';

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

export interface BagCollection{
    items: BagItem[]
}

export interface RestaurantState {
    filter: string
    style: string
    foods: Food[]
    bag: BagCollection
}

interface AddFoodAction extends Action<string>{
    type: typeof ADD_FOOD
    payload: Food
}

interface ChangeCusineStyleAction extends Action<string>{
    type: typeof CHANGE_CUSINE_STYLE
    payload: string
}

interface FilterFoodAction extends Action<string>{
    type: typeof FILTER_FOOD
    payload: string
}

interface RemoveFoodAction extends Action {
    type: typeof REMOVE_FOOD
    payload: BagItem
}
export type RestauranteActionTypes = AddFoodAction | ChangeCusineStyleAction | FilterFoodAction | RemoveFoodAction