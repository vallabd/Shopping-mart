import React from 'react';
import './Category.css';

import { connect } from 'react-redux';
import { addToCart } from '../../Reduxstore/Shopping/Shopping-action';

const Category = ({productData, addToCart}) => {
  return (
    <div >
            <div className='Prod-category'>
                
                      <div>
                        <div className='prod-card' >
                        <div className='prod-img'><img key={productData.id} src={productData.img} aalt="cb" className='productcard-img '/></div>
                            <div className='prod-content'>
                                <h3 key={productData.id}>{productData.name}</h3>
                                <div key={productData.id}>{productData.info}</div>
                                <button className='send-button' onClick={()=> addToCart(productData.id)}>Add to cart</button>
                                
                            </div>
                        </div>
                      </div>
                    
                
            </div>
    </div>
  )
}

const mapDispatchToProps= dispatch =>{
  return {
    addToCart:(id) => dispatch(addToCart(id))
  }
}
export default connect(null, mapDispatchToProps)(Category);