import React from 'react'
import './Bestsellers.css';

export const Bestsellers = () => {

    var Bestsellerdata={
        Items:[
        {
            id:"1",
            image:'/Img1/cb4.jpg',
            heading:'COFFEE BEANS',
            information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
            path:'#'

        },
        {
            id:"2",
            image:'/Img1/cb5.jpg',
            heading:'COFFEE BEANS',
            information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
            path:'#'

        },
        {
            id:"3",
            image:'/Img1/cb6.jpg',
            heading:'COFFEE BEANS',
            information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
            path:'#'

        },
        {
            id:"4",
            image:'/Img1/cb7.jpg',
            heading:'COFFEE BEANS',
            information: 'A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.',
            path:'#'

        }
    ]
}

  return (
    <div >
            <div>
            <div className='h1 mh' id="Products">Our Best Selling Products</div>
            <div className='h3 subh'>“People say money can't buy happiness. They lie. Money buys coffee, coffee makes me happy!”</div>
            </div>
            <div className='outer-div'>
            {
                Bestsellerdata.Items.map ((O)=>{
                        return<div className='card-container'>
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
