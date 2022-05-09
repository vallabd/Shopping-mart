import React from 'react';
import './Keyoffering.css';
import { Container, Row, Col } from 'react-bootstrap';


export const Keyoffering = () => {

    var Keyofferingsdata={
        Items:[
            {
                id:"1",
                image:'/Img/cb1.jpg',
                heading:'COFFEE BEANS',
                information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
                path:'#'
    
            },
            {
                id:"2",
                image:'/Img/tf.jpg',
                heading:'Tea Leaves',
                information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
                path:'#'
    
            },
            {
                id:"3",
                image:'/Img/cb2.jpg',
                heading:'COFFEE BEANS',
                information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
                path:'#'
    
            },
            {
                id:"4",
                image:'/Img/cb3.jpg',
                heading:'COFFEE BEANS',
                information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
                path:'#'
    
            },
        ]
    }

    return (
        <div>

            <div>
            <div className='h1 mh' id="Products">Our Key Offering</div>
            <div className='h2 subh'>Our products gives you best moments with all their flavor and fancies</div>
            </div>
            <div className='outer-div'>
           { 
                Keyofferingsdata.Items.map((O)=>{
                    return <div className='card-container'>
                    <div className='card-row1'>
                            <div className='card-row'>
                                <div className='wrapper'>
                                    <div className='card'>
                                        <img  key={O.id}src={O.image} alt="cb" className='img' />
                                        <div className='info'>
                                            <h1 key={O.id}>{O.heading}</h1>
                                            <p key={O.id}>{O.information}</p>
                                            <a  key={O.id} href={O.path} className='btn'>Shop Now </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                })

            }

            </div>
           
        </div>
    )
}
