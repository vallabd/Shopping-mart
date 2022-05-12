import * as actionTypes from './Shopping-types';

export const addTocart = (itemID) =>{
    return {
        type: actionTypes.ADD_TO_CARD,
        payload:{
            id:itemID
        },
    };
};
export const removeFromcart = (itemID) =>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemID
        },
    };
};
export const adjustQty = (itemID) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload:{
            id:itemID
        },
    };
};

export const loadCurrentItem = (itemID) =>{
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:{
            id:itemID
        },
    };
};