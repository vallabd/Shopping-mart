import React, {useState} from 'react'
import './CartItem.css';

import { connect } from 'react-redux';
import { removeFromCart,adjustQty } from '../../Reduxstore/Shopping/Shopping-action';



const CartItem = ({item, removeFromCart, adjustQty}) => {
  const [input, setInput]=useState(item.qty);

  const onChangeHandler=(e)=>{
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div>
    <div className='category'>      
                        <div className='product-card' >
                        <div className='img-div'><img key={item.id} src={item.img} aalt="cb" className='img '/></div>
                            <div className='product-content'>
                                <h3 key={item.id}>{item.name}</h3>
                                <div key={item.id}>{item.info}</div>
                                
                                    
                                
                            </div>
                            <div className='Product-Qty'>
                                <label htmlFor="qty">Qty : </label>
                                        <input
                                          min="1"
                                          type="number"
                                          id="qty"
                                          name="qty"
                                          value={input}
                                          onChange={onChangeHandler}
                                        />
                                  <button onClick={() => removeFromCart(item.id)} className='actions__deleteItemBtn'>
                                                <img key={item.id} src= {item.delete}/>
                                  </button>
                                </div>
                                
                        </div>
      </div>
      </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
return {
  adjustQty: (id,value)=> dispatch(adjustQty(id,value)),
  removeFromCart :(id) => dispatch(removeFromCart(id))
  
}
}

export default connect(null, mapDispatchToProps)(CartItem); 