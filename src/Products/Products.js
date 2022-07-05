import React from 'react';
import './Products.css';
import Category  from './Category/Category';

import { connect } from 'react-redux';

const Products = ( {products}) => {
  return (
    <div className='row'>
            <div className='col-lg-2 products-menu'>
              <div className='products-catogery'>
                Category
              </div>
              <div>
                <ul>
                  <li ><a> {'>>'} Tea </a></li>
                  <li><a> {'>>'} Coffee </a></li>
                  <li><a> {'>>'} Greeen Tea </a></li>
                  <li><a> {'>>'} Coffee beans </a></li>
                </ul>
              </div>
            </div>
      <div className='col-lg-10 products-main '>
         {
           products.map((prod)=>(
            <Category key={prod.id} productData={prod}/>
           ))
         }
      </div>
      
    </div>    
  )
}

const mapStateToProps= state=>  {
 return {
    products:state.shop.products,
 } ; 
};


export default connect(mapStateToProps)(Products);