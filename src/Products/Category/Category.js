import React from 'react';
import './Category.css';
import { AiFillDelete } from "react-icons/ai";

import { connect } from 'react-redux';
import { addToCart } from '../../Reduxstore/Shopping/Shopping-action';

const Category = ({productData, addToCart}) => {
  return (
    <div >
            <div className='category'>
                
                      <div>
                        <div className='product-card' >
                        <div className='img-div'><img key={productData.id} src={productData.img} aalt="cb" className='img '/></div>
                            <div className='product-content'>
                                <h3 key={productData.id}>{productData.name}</h3>
                                <div key={productData.id}>{productData.info}</div>
                                <button onClick={()=> addToCart(productData.id)}>Add to cart</button>
                                
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