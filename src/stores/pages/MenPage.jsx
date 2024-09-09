import React from 'react'
import { menData } from '../data/men'
import NavBar from '../components/NavBar'

const MenPage = () => {
  return (
    <>
    <NavBar />
    <div className='pageSection'>
      {menData.map((item) => {
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

export default MenPage