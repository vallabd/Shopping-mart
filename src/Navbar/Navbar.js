import React,{useState, useEffect,lazy,Suspense} from 'react';
import'./Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BsFillMenuButtonFill } from 'react-icons/bs';
import { MdShoppingCart } from "react-icons/md";
import {HashRouter,Route,Routes} from 'react-router-dom';
  
import { connect } from 'react-redux';

const Home=lazy(()=>import ('../Home/Home'));
const Products=lazy(()=>import ('../Products/Products'));
const Cart=lazy(()=>import ('../Cart/Cart'));




const Navbar=( {cart})=> {
  const [cartCount,setCartCount ] = useState(0);
  const[rightside,setRightside]=React.useState(-200)
  const [isMobileview,setIsMobilview]=React.useState(document.body.offsetWidth<=700 ? true:false)



  window.addEventListener('resize',function(){
    let deviceWidth=document.body.offsetWidth;
    if(deviceWidth<=701){
      setIsMobilview(true)
    }else{
      setIsMobilview(false)
    }
  })

  function fnToggle(){
  
    setRightside(rightside==2 ? -150: 2)
  }
  useEffect(()=>{
    var count=0;
    cart.forEach(item=>{
      count+= item.qty;  
    } );
    setCartCount(count)
  }, [cart,cartCount]);
 
  
  return (
    <div>
        <div  className='topheader'>COD Avaliable , Free shipping orders above 500/-</div>
        <nav className='navbar'>
            <div className='brand-title' href='#/Home'>Coffee Shop</div>
            <a className='toggle-button'><BsFillMenuButtonFill onClick={fnToggle}/></a>
            <div style={{right:rightside}} className={isMobileview ? 'mbnavbar-links':'navbar-links'}>
                <ul>
                    <li><a href='#/Home'>Home</a></li>
                    <li><a href='#/Products'>Products</a></li>
                    <li className='cart-dynamic'><a href='#/Cart' >Cart <MdShoppingCart/> {cartCount}</a></li>
                    
                    
                   
                </ul>
                
            </div>
        </nav>
        <Suspense fallback='...loading'>
            <HashRouter>
          
            
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='Cart' element={<Cart/>}/>
            <Route path='/*' element={<Home/>}/>
           
          </Routes>
          
          </HashRouter>
        </Suspense>
    </div>
  )
};

const mapStateToProps= state=> {
  return {
    cart: state.shop.cart 
  }
}


export default connect (mapStateToProps)(Navbar);