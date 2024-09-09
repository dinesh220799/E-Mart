import React from 'react'
import { tvData } from '../data/tv'
import NavBar from '../components/NavBar'


const TVPage = () => {
  return (
    <>
    <NavBar />
    <div className='pageSection'>
      {tvData.map((item) => {
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

export default TVPage