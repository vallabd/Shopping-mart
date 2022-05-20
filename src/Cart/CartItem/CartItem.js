import React from 'react'
import './CartItem.css';


const CartItem = ({itemData}) => {
  return (
    <div>
    <div className='category'>      
                        <div className='product-card' >
                        <div className='img-div'><img key={itemData.id} src={itemData.img} aalt="cb" className='img '/></div>
                            <div className='product-content'>
                                <h3 key={itemData.id}>{itemData.name}</h3>
                                <div key={itemData.id}>{itemData.info}</div>
                                <input type='number' value={itemData.qty}/>
                                
                            </div>
                        </div>
      </div>
      </div>
  )
}

export default CartItem;