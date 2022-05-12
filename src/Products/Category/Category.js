import React from 'react';
import './Category.css';

export const Category = () => {
    var Catagorydata={
        items:[
            {
                id:'101',
                name:'instant coffee',
                price:'999',
                info:'authontic instant coffee with frashning teast',
                img: '/Img/cb8.jpg',

            },
            {
                id:'101',
                name:'instant coffee',
                price:'999',
                info:'authontic instant coffee with frashning teast',
                img: '/Img/cb8.jpg',

            }
        ]
    }
  return (
    <div >
            <div className='category'>
                {
                    Catagorydata.items.map((Object)=>{
                        return <div>
                                    <div className='product-card' >
                                        <div className='img-div'><img key={Object.id} src={Object.img} aalt="cb" className='img '/></div>
                                            <div className='product-content'>
                                                    <h3 key={Object.id}>{Object.name}</h3>
                                                    <div key={Object.id}>{Object.name}</div>
                                                    <button>Add to cart</button>
                                            </div>
                                    </div>
                                </div>
                    })
                }
            </div>
    </div>
  )
}
