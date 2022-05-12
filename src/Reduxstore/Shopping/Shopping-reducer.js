import * as actionTypes from './Shopping-types';

const INITIAL_STATE={
    products: [], // (id,titie,description, price,img)
    cart:[], // (id,titie,description, price,img, qty)
    currentItem:null, 
};
const shopReducer=(state= INITIAL_STATE,action )=>{
    switch(action.type){
        case actionTypes.ADD_TO_CARD:
            return {}; 
        case actionTypes.REMOVE_FROM_CART:
            return {};
        case actionTypes.ADJUST_QTY:
            return {};
        case actionTypes.LOAD_CURRENT_ITEM: 
            return {};
        default:
            return state;
            
    }
     
};

export default shopReducer;