import React from 'react'
import { tvData } from '../data/tv'

const TV = () => {
  const firstFiveImages = tvData.slice(0, 5)
  return (
    <>
  <div className="proTitle">
   <h2>Mobiles</h2>
   </div>
    <div className='proSection'>
      {
        firstFiveImages.map((item) => {
          return (
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


export default TV