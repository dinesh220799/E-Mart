import React from 'react'
import { furnitureData } from '../data/furniture'
import NavBar from '../components/NavBar'

const FurniturePage = () => {
  return (
    <>
    <NavBar />
    <div className='pageSection'>
      {furnitureData.map((item) => {
        return(
          <div>
          <div className="pageImg">
            <img src={item.image} alt="" />
          </div>
          <div className="proModel">
            {item.company},{item.model}

          </div>
          </div>
          
        )
      })
      }
    </div>
    </>
  )
}


export default FurniturePage