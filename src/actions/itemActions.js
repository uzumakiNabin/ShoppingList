import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
    return(dispatch) => {
        dispatch({
            type: GET_ITEMS,
        });
    }
}

export const deleteItem = id => {
    return(dispatch) => {
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    }
}

export const addItem = item => {
    return(dispatch) => {
        dispatch({
            type: ADD_ITEM,
            payload: item
        })
    }
}