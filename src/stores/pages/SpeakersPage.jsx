import React from 'react'
import NavBar from '../components/NavBar'
import { speakerData } from '../data/speaker'

const SpeakersPage = () => {
  return (
    <>
    <NavBar />
    <div className='pageSection'>
      {speakerData.map((item) => {
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

export default SpeakersPage