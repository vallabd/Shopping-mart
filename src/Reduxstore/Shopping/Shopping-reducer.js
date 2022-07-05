import * as actionTypes from './Shopping-types';


const INITIAL_STATE={
    products: [
        {
            id:'101',
            name:'instant coffee',
            price:150,
            info:'authontic instant coffee with frashning teast',
            img: '/Img/cb8.jpg',
            delete: '/Img/delete2.png',
            

        },
        {
            id:'102',
            name:'instant tea',
            price:100,
            info:'authontic instant coffee with frashning teast',
            img: '/Img/cb2.jpg',
            delete: '/Img/delete2.png',

        },
    ], // (id,titie,description, price,img)
    cart:[], // (id,titie,description, price,img, qty)
    currentItem:null, 
};
const shopReducer=(state=INITIAL_STATE,action )=>{
    switch(action.type){
        case actionTypes.ADD_TO_CARD:
            //get the item data from the products array
            const item= state.products.find( prod =>prod.id === action.payload.id)
            // check if item is alreday in cart
            const inCart= state.cart.find ( (item)=> item.id=== action.payload.id ? true : false)

            return {
                ...state,
                cart: inCart 
                ? state.cart.map(item=> item.id===action.payload.id 
                    ? {...item , qty:item.qty+1} : item) 
                : [...state.cart ,{...item, qty:1}],

            }; 
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, 
                cart: state.cart.filter(item=> item.id !== action.payload.id), 
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => 
                item.id === action.payload.id 
                ? {...item, qty: +action.payload.qty}: item
                ) 
            };
        case actionTypes.LOAD_CURRENT_ITEM: 
            return {
                ...state,
                currentItem: action.payload
            };
        default:
            return state;
            
    }
     
};

export default shopReducer;