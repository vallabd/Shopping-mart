import React from 'react';
import './Products.css'
import {bootstrap} from 'bootstrap';
export const Products = () => {
  return (
    <div className='row'>
      <div className='col-lg-2 products-menu'>
      
                <div className=''>
                    <div className='products-catogery'>
                    Catogery 
                    </div>
                        <ul>
                          <li><a>Item1</a></li>
                          <li><a>Item2</a></li>
                          <li><a>Item3</a></li>
                          <li><a>Item4</a></li>
                        </ul>
                </div>
      </div>
      <div className='col-lg-10 products-main '>Products</div>
    </div>
  )
}
