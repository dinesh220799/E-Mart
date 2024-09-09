import React from 'react'
import { menData } from '../data/men'

const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
        <h2>Men Fashion</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                  <div className='imgeBox'>
                  <img className='proImage' src={item.image} alt="mobile" />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button>Add to Cart</button>
                </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Men