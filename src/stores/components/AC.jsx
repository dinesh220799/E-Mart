import React from 'react'
import { acData } from "../data/ac";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5)
  return (
    <>
    <h2>AC</h2>
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


export default AC