import React from 'react';
import './Footer.css';
import { BsFacebook,BsWhatsapp,BsInstagram,BsLinkedin,BsFillMenuButtonFill} from 'react-icons/bs';
import { SiGooglemaps } from "react-icons/si";
import { FaAddressCard,FaTelegramPlane } from "react-icons/fa";

export function Footer() {
  return <div>
  <div className='Footer container-fluid'>
      
          
          <div className='col-lg-3 col-md-4'>
          <div className='heading-maps'>Our Location   <SiGooglemaps/></div>
                            <div className='googlecard'>
                  
                                <img src="./Img/gm.jpg" alt="cb" className='googlecard-img' />
                                
                            </div>
          </div> 
          
            
          <div className='col-lg-3 col-md-4'>
          <div className='menu address'>
          <div className='menu-links'>
          
                <ul>
                <div className='heading'>Social Media   <FaTelegramPlane/></div>
                    
                    <li><a href='#'>facebook   <BsFacebook/></a></li>
                    <li><a href='#'>Whatsapp   <BsWhatsapp/></a></li>
                    <li><a href='#'>Instagram   <BsInstagram/></a></li>
                    <li><a href='#'>Linkdin   <BsLinkedin/></a></li>
                   
                </ul>
                
            </div>
              </div>
          </div>
          <div className='col-lg-3 col-md-4'>
          <div className='menu address'>
          <div className='menu-links'>
          
                <ul>
                <div className='heading'>Menu   <BsFillMenuButtonFill/></div>
                    <li><a href='#/Home'>Home</a></li>
                    <li><a href='#/Products'>Products</a></li>
                    <li><a href='#/Cart'>Cart</a></li>
                    <li><a href='#/ContactUs'>Contact Us</a></li>
                   
                </ul>
                
            </div>
              </div>
            
            </div>
            <div className='col-lg-3 col-md-4'>
          <div className='address'>
                <div className='heading'>Our address   <FaAddressCard/></div>
                <p className='address-para'>305, The Business Hub, Kothrud, Pune, Maharashtra, 411038</p>
            </div>
            </div>
            
     
    </div>
    <div className='rights-reserved'>&copy;All rights are reserved</div>
    </div>
}

