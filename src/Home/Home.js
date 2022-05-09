import React from 'react';
import {Sliderposter} from './Slider-poster/Sliderposter';
import {Keyoffering} from './Key-offering/Keyoffering';
import { Bestsellers } from './Best-sellers/Bestsellers';
import {About} from './About/About'



export const Home = () => {

  return (
    <div className='container-fluid'>
        <Sliderposter/>
        <Keyoffering/>
        <Bestsellers/>
        <About/>
        
    </div>
  )
}
