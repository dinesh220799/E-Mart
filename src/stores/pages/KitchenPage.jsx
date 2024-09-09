import React from 'react'
import { kitchenData } from '../data/kitchen'
import NavBar from '../components/NavBar'

const KitchenPage = () => {
  return (
    <>
    <NavBar />
    <div className='pageSection'>
      {kitchenData.map((item) => {
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

export default KitchenPage