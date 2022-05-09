import React from 'react';
import'./Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsMenuButtonWideFill, BsFillMenuButtonFill } from 'react-icons/bs';
import {HashRouter,Route,Routes} from 'react-router-dom';
import {Home} from '../Home/Home'
import { Products  } from '../Products/Products';



export default function Navbar() {
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
                    <li><a href='#/Cart'>Cart</a></li>
                    
                    <li><a href='#/ContactUs'>Contact Us</a></li>
                   
                </ul>
                
            </div>
        </nav>

        <HashRouter>
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='/*' element={<Home/>}/>
           
          </Routes>
        </HashRouter>
    </div>
  )
}
